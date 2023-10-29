const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', function(req, res, next) {
    const splashImg = 'https://i.pinimg.com/originals/49/a4/7f/49a47f4aa2bad945b9d4905dec88b69c.jpg'
    res.render('index', {
        title: 'Dungeon Buddy',
        hero: splashImg,
    });
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
    // Which passport strategy is being used?
    'google',
    {
        // Requesting the user's profile and email
        scope: ['profile', 'email'],
        // Optionally force pick account every time
        // prompt: "select_account"
    }
));
    
// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
    'google',
    {
        successRedirect: '/users',
        failureRedirect: '/'
    }
));
        
// OAuth logout route
router.get('/logout', function(req, res){
    req.logout(function() {
        res.redirect('/');
    });
});

module.exports = router;
