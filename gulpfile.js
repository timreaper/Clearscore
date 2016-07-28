/**------------------------------------------------------------------------------------------------------------------**
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *
 * ------------------------------------ Ed's Gulp File for Handlebars Projects! ------------------------------------- *
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *
 **------------------------------------------------------------------------------------------------------------------**/

/**--------------------------------*
 * Variable Declarations (Requires)
 *---------------------------------*/

/* The almighty runner of tasks */
var gulp = require('gulp');

/* Concatenates all files in pipe into one file */
var concat = require('gulp-concat');

/* Minifies the CSS */
var minifyCSS = require('gulp-clean-css');

/* Creates a notify message for when task is complete */
var notify = require('gulp-notify');

/* Allows for ordering of files in the pipe */
var order = require('gulp-order');

/* Prints out filenames of all the files that pass through a task */
var print = require('gulp-print');

/* Compiles SASS/SCSS into CSS */
var sass = require('gulp-sass');

/* Minifies the JS */
var uglify = require('gulp-uglify');

/**-------------------------------*
 * Variable Declarations (Custom)
 *--------------------------------*/

/**
 * Source Paths
 */
var jsApp = 'source/app/js/';
var scssApp = 'source/app/scss/';
var scssAppFile = scssApp + 'main_app.scss';

var scssLib = 'source/libraries/scss/';
var scssLibFile = scssLib + 'main_libraries.scss';
var jsLib = 'source/libraries/js/';

/**
 * Destination Paths
 */
var cssAppDest = 'dist/app/css/';
var cssLibDest = 'dist/libraries/css/';
var jsAppDest = 'dist/app/js/';
var jsLibDest = 'dist/libraries/js/';

/**-----------------------------*
 * Tasks (Fetching & Compiling)
 *------------------------------*/

/**
 * Javascript (App)
 *       Compiles all the Javascript files in the JS directory
 ***/
gulp.task('js_app', function () {
    return gulp.src(jsApp + '**/*.js')
        .pipe(order([
            "modules/**/*.js",
            "controllers/**/*.js",
            "directives/**/*.js",
            '*.js'
        ], jsLib))
        .pipe(print(function (filepath) {
            return "JS (App): " + filepath;
        }))
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsAppDest));
});

/**
 * Javascript (Libraries)
 *       Compiles all the Javascript files in the JS directory in the Libraries directory
 ***/
gulp.task('js_libraries', function () {
    return gulp.src(jsLib + '**/*.js')
        .pipe(order([
            "jquery.min.js",
            '*.js'
        ], jsLib))
        .pipe(print(function (filepath) {
            return "JS (Libraries): " + filepath;
        }))
        .pipe(concat('libraries.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsLibDest));
});

/**
 * SCSS (App)
 *       Compiles all the SCSS stylesheets in the app directory
 ***/
gulp.task('scss_app', function () {
    return gulp.src(scssAppFile)
        .pipe(concat('app.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(gulp.dest(cssAppDest));
});

/**
 * SCSS (Libraries)
 *       Compiles all the SCSS stylesheets in the libraries directory
 ***/
gulp.task('scss_libraries', function () {
    return gulp.src(scssLibFile)
        .pipe(concat('libraries.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(gulp.dest(cssLibDest));
});

/**----------------------------*
 * Tasks (Watchers)
 *-----------------------------*/

gulp.task('watch', function () {
    gulp.watch(scssApp + '**/*.scss', ['scss_app']);
    gulp.watch(jsApp + '**/*.js', ['js_app']);
    gulp.watch(jsLib + '**/*.js', ['js_libraries']);
});

/**----------------------------*
 * Tasks (Running & Executing)
 *-----------------------------*/

/**
 * Default (THE MOST IMPORTANT TASK OF ALL)
 *
 ***/
gulp.task('default', ['scss_app', 'scss_libraries', 'js_app', 'js_libraries'], function () {
    console.log('Gulp complete.');
});