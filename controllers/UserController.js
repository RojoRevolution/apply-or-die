const db = require("../models");
const express = require("express");
// const router = require("express").Router();
const passport = require('passport');
const bcrypt = require("bcryptjs");

// Defining methods for the booksController
module.exports = {
    findAll: function (req, res) {
        db.User
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // Find One - Will need to change it to find by email
    findById: function (req, res) {
        db.User
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findOne: function (req, res) {
        db.User
            .findOne(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //  Create New
    create: function (req, res) {
        console.log("Req: ", req.body)
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    populateEntries: function (req, res) {
        db.User.findById(req.params.id).populate('userEntries')
            .then(data => res.json(data))
    },
    remove: function (req, res) {
        db.User
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // Login Function
    logIn: function (req, res, next) {
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
    },
    signUp: function (req, res) {
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
    },
    getInfo: function (req, res) {
        res.send(req.user);
    },
    logOut: function (req, res) {
        req.logout();
        res.redirect("/login");
    },
    pushApplications: function (req, res) {
        console.log("REQ ID: ", req.params.id)
        console.log("REQ BODY: ", req.body.dataId)
        db.User
            .updateOne(
                { _id: req.params.id },
                { $push: { userEntries: req.body.dataId } },
            )
            .then(dbModel => {
                res.json(dbModel)
            })
            .catch(err => res.status(422).json(err));
    }
};
