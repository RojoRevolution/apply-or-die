const bcrypt = require("bcryptjs");
var db = require("../models");
var passport = require("passport");
var localStrategy = require("passport-local").Strategy;


module.exports = function () {
    console.log("Before Passpor.use")
    passport.use(
        new localStrategy({ usernameField: "email" }, (email, password, done) => {
            console.log('//// IN PASSPORT /////')
            db.User.findOne({ email: email }, (err, user) => {
                // console.log('//// IN PASSPORT /////')
                if (err) throw err;
                if (!user) return done(null, false);
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) throw err;
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
        User.findOne({ _id: id }, (err, user) => {
            const userInformation = {
                email: user.email,
            };
            callback(err, userInformation)
        })
    })
}

// passport.use(
//     new localStrategy((email, password, done) => {
//         db.User.findOne({ emai: email }, (err, user) => {
//             console.log('//// IN PASSPORT /////')
//             if (err) throw err;
//             if (!user) return done(null, false);
//             bcrypt.compare(password, user.password, (err, result) => {
//                 if (err) throw err;
//                 if (result === true) {
//                     return done(null, user);
//                 } else {
//                     return done(null, false);
//                 }
//             })
//         })
//     })
// );
// passport.serializeUser((user, callback) => {
//     callback(null, user.id);
// });
// passport.deserializeUser((id, callabck) => {
//     User.findOne({ _id: id }, (err, user) => {
//         const userInformation = {
//             email: user.email,
//         };
//         callback(err, userInformation)
//     })
// })

// module.exports = passport;



// OLD CODE
// passport.use(new localStrategy(
//     {
//         usernameField: "email"
//     },
//     function (email, password, done) {
//         db.User.findOne({ email: email })
//             .then((dbUser) => {
//                 console.log('//// IN PASSPORT /////')
//                 console.log("Found User: ", dbUser)
//                 // If there's no user with the given email
//                 if (!dbUser) { return done(null, false); }
//                 // if (!dbUser) {
//                 //     console.log("incorrect email")
//                 //     return done(null, false, {
//                 //         message: "Incorrect email."
//                 //     });
//                 // }
//                 // If there is a user with the given email, but the password the user gives us is incorrect
//                 console.log("Found Password: ", dbUser)
//                 if (dbUser.password != password) { return done(null, false); }
//                 // else if (!dbUser.validPassword(password)) {
//                 //     console.log("incorrect passwrd")
//                 //     return done(null, false, {
//                 //         message: "Incorrect password."
//                 //     });
//                 // }
//                 // If none of the above, return the user
//                 return done(null, dbUser);
//             });
//     }
// ));



// passport.serializeUser(function (user, cb) {
//     console.log('SERIALIZE FUNCTION');
//     cb(null, user);
// });

// passport.deserializeUser(function (obj, cb) {
//     console.log('DESERIALIZE FUNCTION');
//     cb(null, obj);
// });

// // Exporting our configured passport
// module.exports = passport;
