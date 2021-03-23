const bcrypt = require("bcryptjs");
var db = require("../models");
var passport = require("passport");
var localStrategy = require("passport-local").Strategy;


module.exports = function () {
    passport.use(
        new localStrategy({
            usernameField: 'username',
            passwordField: 'password',
        },
            (username, password, done) => {
                // Search for a matching Username in the DB
                db.User.findOne({ username: username }, (err, user) => {
                    if (err) throw err;
                    if (!user) return done(null, false);
                    // If user exists, compare the entered password with the hashed password in the DB
                    bcrypt.compare(password, user.password, (err, result) => {
                        if (err) throw err;
                        // If pw matches, return the user, otherwise return false
                        if (result === true) {
                            return done(null, user);
                        } else {
                            return done(null, false);
                        }
                    })
                })
            })
    );
    passport.serializeUser((user, callback) => {
        callback(null, user.id);
    });
    passport.deserializeUser((id, callback) => {
        db.User.findOne({ _id: id }, (err, user) => {
            const userInformation = {
                username: user.username,
            };
            callback(err, userInformation)
        })
    })
}
