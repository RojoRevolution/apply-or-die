const db = require("../../models/");
const router = require("express").Router();
const userController = require("../../controllers/UserController");
var passport = require("../../config/passport");


// router.route("/login",)
//     // This get should be find by email not id
//     .get(userController.findById)
// router.post("/login", passport.authenticate("local"), function (req, res) {
//     console.log("/login request.body: ", req.body)
//     console.log('///// Sign In Success ////');
//     res.json(req.user);
// })

router.post("/login", passport.authenticate("local",
    {
        // successRedirect: "/dashboard",
        failureRedirect: "/",
    }
    // ), function (req, res, next) {
), function (req, res) {
    console.log("/login request.body: ", req.body)
    console.log('///// Sign In Success ////');
    console.log('REQ SESSION', req.session)
    console.log('REQ USER', req.user)
    res.json(req.user);
    // res.json({
    //     user: req.user,
    //     loggedIn: true
    // });
});

// router.post("/login", passport.authenticate("local", {
//     failureRedirect: "/signup"
// }),
//     function (req, res) {
//         console.log(req.user)
//         // console.log(req.user)
//         const userInfo = { port: process.env.PORT, user: req.user }
//         res.json(userInfo)
//         console.log(process.env.PORT)
//     }
// );


// router.route("/signup").post(userController.create);

// router.post("/signup", function (req, res) {
//     console.log('//// API ROUTE ////')
//     console.log("/signup req.body: ", req.body)
//     db.User.create({
//         email: req.body.email,
//         password: req.body.password
//     })
//         .then(function () {
//             console.log('====================')
//             console.log('REDIRECTING TO LOGIN')
//             console.log('====================')
//             res.redirect(307, "/api/user/login");
//         })
//         .catch(function (err) {
//             res.status(401).json(err);
//         });
// });
router.post("/signup", function (req, res, next) {
    console.log('//// API ROUTE ////')
    console.log("/signup req.body: ", req.body)
    console.log("/signup email: ", req.body.email)
    db.User.findOne({ email: req.body.email }, function (err, user) {
        if (err) throw err;
        if (user) {
            console.log("Account with this email already exists")
            return res.json("Account with this email already exists");
        }
        if (!user) {
            let newUser = new db.User({
                email: req.body.email,
                password: req.body.password
            })
            console.log("Email", newUser.email)
            console.log("PW", newUser.password)
            // newUser.password = newUser.generateHash(req.body.password);
            console.log('HASHED', newUser.password)
            db.User.create({
                email: newUser.email,
                password: newUser.password
            }).then(function (data) {
                console.log('DATA: ', data)
                console.log(req.session)
                console.log('====================')
                console.log('REDIRECTING TO LOGIN')
                console.log('====================')
                res.redirect(307, "/api/user/login");
            })
                .catch(function (err) {
                    res.status(401).json(err);
                });
        }
    })
});


// Route for logging user out
// app.get("/logout", function (req, res) {
//     req.logout();
//     res.redirect("/");
// });


// router.route("/user_data")
//     // Route for getting some data about our user to be used client side
//     .get(userController.findById)

router.get("/api/user_data", function (req, res) {
    if (!req.user) {
        // The user is not logged in, send back an empty object
        res.json({});
    } else {
        // Otherwise send back the user's email and id
        // Sending back a password, even a hashed password, isn't a good idea
        res.json({
            email: req.user.email,
            id: req.user.id
        });
    }
});


module.exports = router;
