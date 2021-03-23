const db = require("../models");
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
    // Create new entry
    create: function (req, res) {
        console.log("Req: ", req.body)
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // Get User specific entries
    populateEntries: function (req, res) {
        db.User.findById(req.params.id).populate('userEntries')
            .then(data => res.json(data))
    },
    // Delete
    remove: function (req, res) {
        db.User
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // Login Functionaliaty -- Runs Passport Middleware
    logIn: function (req, res, next) {
        passport.authenticate("local", (err, user, info) => {
            if (err) throw err;
            // If ther is no user, send User Does Not Exist
            if (!user) res.send("User does not exist")
            // Otherwise use exists, run the following
            else {
                req.login(user, (err) => {
                    if (err) throw err;
                    res.json(user)
                });
            }
        })(req, res, next);
    },
    // Sign Up Functionality
    signUp: function (req, res) {
        // Search to see if the username already exists
        db.User.findOne({ username: req.body.username }, async (err, doc) => {
            if (err) throw err;
            // If it does return user exists
            if (doc) res.send("User Already Exists");
            // If it doesn't exist, create new user
            if (!doc) {
                // Hash the password
                const hashedPassword = await bcrypt.hash(req.body.password, 10);
                // create user with the hashed password
                const newUser = new db.User({
                    username: req.body.username,
                    email: req.body.email,
                    password: hashedPassword,
                });
                // create the user in the DB
                await db.User.create(newUser);
                // send response to the login middleware, then log the user in
                res.redirect(307, "/api/user/login");
            }
        });
    },
    getInfo: function (req, res) {
        res.send(req.user);
    },
    logOut: function (req, res) {
        req.logout();
        res.send("Logging Out");
    },
    // Push Application ID's to the user object that created them
    pushApplications: function (req, res) {
        // Look for the specific user then push the entry ID
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
