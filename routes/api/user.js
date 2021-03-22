const db = require("../../models/");
const express = require("express");
const router = require("express").Router();
const passport = require('passport');
const bcrypt = require("bcryptjs");

router.post("/login", (req, res, next) => {
    console.log("/login: ", req.body)
    // console.log('/login Res: ', res)
    passport.authenticate("local", (err, user, info) => {
        console.log("User: ", user)
        console.log("User Config: ", user.username)
        console.log("Message: ", info)
        if (err) throw err;
        if (!user) res.send("User does not exist")
        else {
            req.login(user, (err) => {
                if (err) throw err;
                console.log('/////// IN req.login ////////');
                console.log(user)
                // res.send("Successfully Authenticated");
                console.log(" ////// Successfully Authenticated ///////")
                res.json(user)
                // res.redirect("/dashboard");
                // res.redirect(307, "/dashboard");

            });
        }
    })(req, res, next);
})


router.post("/signup", (req, res) => {
    console.log("/signup: ", req.body)
    db.User.findOne({ username: req.body.username }, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send("User Already Exists");
        if (!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);

            const newUser = new db.User({
                username: req.body.username,
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

router.put("/newapp/:id", (req, res) => {
    console.log("REQ ID: ", req.params.id)
    console.log("REQ BODY: ", req.body.dataId)
    db.Application
        .updateOne(
            { _id: req.params.id },
            { $push: { applications: req.body.dataId } },
        )
        .then(dbModel => {
            res.json(dbModel)
        })
        .catch(err => res.status(422).json(err));
})




module.exports = router;
