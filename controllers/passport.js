import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import User from "../models/User.js"

// Passport strat
passport.use(new GoogleStrategy({
    // OPtions for google strat
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
//   callback function 
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  } 
));
