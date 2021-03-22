const db = require("../../models/");
const router = require("express").Router();
// const userController = require("../../controllers/UserController");
const passport = require('passport');
// require("../../config/passport")(passport);
// const passport = require("../../config/passport");
const bcrypt = require("bcryptjs");


// router.route("/login",)
//     // This get should be find by email not id
//     .get(userController.findById)
// router.post("/login", passport.authenticate("local"), function (req, res) {
//     console.log("/login request.body: ", req.body)
//     console.log('///// Sign In Success ////');
//     res.json(req.user);
// })

// router.post("/login", passport.authenticate("local",
//     {
//         successRedirect: "/dashboard",
//         failureRedirect: "/",
//     }
//     // ), function (req, res, next) {
// ), function (req, res) {
//     console.log("/login request.body: ", req.body)
//     console.log('///// Sign In Success ////');
//     console.log('REQ SESSION', req.session)
//     console.log('REQ USER', req.user)
//     // res.json(req.user);
//     // res.json({
//     //     user: req.user,
//     //     loggedIn: true
//     // });
// });

// router.post("/login", passport.authenticate("local"), function (req, res) {
//     console.log(req.body)
//     console.log('///// API/LOGIN ////');
//     console.log(req.user)
//     res.json(req.user);
// });



router.post("/login", (req, res, next) => {
    console.log("/login: ", req.body)
    passport.authenticate("local", (err, user, info) => {
        console.log("User: ", user)
        console.log("Message: ", info)
        if (err) throw err;
        if (!user) res.send("User does not exist");
        else {
            req.Login(user, (err) => {
                if (err) throw err;
                res.send("Successfully Authenticated");
                console.log("Successfully Authenticated")
                // res.redirect("/dashboard");
                res.redirect(307, "/dashboard");

                console.log(req.user);
            });
        }
    })(req, res, next);
})



// router.post("/signup", function (req, res, next) {
//     console.log('//// API ROUTE ////')
//     console.log("/signup req.body: ", req.body)
//     console.log("/signup email: ", req.body.email)
//     db.User.findOne({ email: req.body.email }, function (err, user) {
//         if (err) throw err;
//         if (user) {
//             console.log("Account with this email already exists")
//             return res.json("Account with this email already exists");
//         }
//         if (!user) {
//             let newUser = new db.User({
//                 email: req.body.email,
//                 password: req.body.password
//             })
//             console.log("Email", newUser.email)
//             console.log("PW", newUser.password)
//             // newUser.password = newUser.generateHash(req.body.password);
//             console.log('HASHED', newUser.password)
//             db.User.create({
//                 email: newUser.email,
//                 password: newUser.password
//             }).then(function (data) {
//                 console.log('DATA: ', data)
//                 console.log(req.session)
//                 console.log('====================')
//                 console.log('REDIRECTING TO LOGIN')
//                 console.log('====================')
//                 res.redirect(307, "/api/user/login");
//             })
//                 .catch(function (err) {
//                     res.status(401).json(err);
//                 });
//         }
//     })
// });

// router.post("/signup", (req, res) => {
//     db.User.findOne({ email: req.body.email }, async (err, doc) => {
//         if (err) throw err;
//         if (doc) res.send("This user already exists");
//         if (!doc) {
//             const hashedPassword = await bcrypt.hash(req.body.password, 10);
//             const newUser = new db.User({
//                 email: req.body.email,
//                 password: hashedPassword
//             });
//             await db.User.create(newUser);
//             res.send("User Created")
//         }
//     }).then((data) => {
//         console.log('====== REDIRECTING TO LOGIN ======')
//         res.redirect(307, "/api/user/login");
//     }).catch((err) => {
//         res.status(401).json(err)
//     })
// })

router.post("/signup", (req, res) => {
    console.log("/signup: ", req.body)
    db.User.findOne({ email: req.body.email }, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send("User Already Exists");
        if (!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);

            const newUser = new db.User({
                email: req.body.email,
                password: hashedPassword,
            });

            console.log(newUser)
            await db.User.create(newUser);
            // res.send("User Created");
            res.redirect(307, "/api/user/login");
        }
    });
});

router.get("/info", (req, res) => {
    res.send(req.user);
})

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/login");
});


// Route for logging user out
// app.get("/logout", function (req, res) {
//     req.logout();
//     res.redirect("/");
// });

// router.get("/user_data", function (req, res) {
//     if (!req.user) {
//         // The user is not logged in, send back an empty object
//         res.json({});
//     } else {
//         // Otherwise send back the user's email and id
//         // Sending back a password, even a hashed password, isn't a good idea
//         res.json({
//             email: req.user.email,
//             id: req.user.id
//         });
//     }
// });


module.exports = router;
