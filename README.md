# Hi Clearscore!

This is the code created from having done your assessment.

- Gulp (for running tasks e.g. concatenating & minifying the JS & SCSS files)
- SCSS (for styling the page)
- Angular (for handling data and creating HTML dynamically)
- Skeleton (for providing a minimal CSS framework)

The only current weakness I spotted during the making & testing of this is that the user could manipulate the score by finding the score variables in the DOM & setting new values for them. 
A way to counter this would probably be to create some sort of directive that would handle the scoring of the game, which would make them less publicly vulnerable to being changed outside of the game.

You can view a live demo of the page [here](https://rawgit.com/timreaper/Clearscore/master/dist/index.html).