app.directive('weaponInfo', function(){
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'app/templates/weaponInfo.html'
    };
});