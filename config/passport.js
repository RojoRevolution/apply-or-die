var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

passport.use(new LocalStrategy(
    {
        usernameField: "email"
    },
    function (email, password, done) {
        db.User.findOne({ email: email })
            .then((dbUser) => {
                console.log('//// IN PASSPORT /////')
                console.log(dbUser)
                // If there's no user with the given email
                if (!dbUser) { return done(null, false); }
                // if (!dbUser) {
                //     console.log("incorrect email")
                //     return done(null, false, {
                //         message: "Incorrect email."
                //     });
                // }
                // If there is a user with the given email, but the password the user gives us is incorrect
                if (dbUser.password != password) { return done(null, false); }
                // else if (!dbUser.validPassword(password)) {
                //     console.log("incorrect passwrd")
                //     return done(null, false, {
                //         message: "Incorrect password."
                //     });
                // }
                // If none of the above, return the user
                return done(null, dbUser);
            });
    }
));

// passport.use(new LocalStrategy(
//     function (email, password, done) {
//         console.log('IN LOCAL STRATEGY');
//         db.User.findOne({
//             email: email
//         }, function (err, user) {
//             if (err) {
//                 console.log("something went wrong\n", err);
//                 return done(err)
//             }
//             if (!user) {
//                 return done(null, false, { message: "User not found" });
//             }
//             if (!user.validPassword(password, user.password)) {
//                 return done(null, false, { message: "invalid password" });
//             } else {
//                 return done(null, user)
//             }
//         });
//     }
// ));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function (user, cb) {
    console.log('SERIALIZE FUNCTION');
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    console.log('DESERIALIZE FUNCTION');
    cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
