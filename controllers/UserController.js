const db = require("../models");


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
    // update: function (req, res) {
    //     console.log("REQ ID: ", req.params.id)
    //     console.log("REQ BODY: ", req.body.data)
    //     db.Application
    //         .updateOne(
    //             { _id: req.params.id },
    //             { $push: { notes: req.body.data } },
    //             { safe: true, upsert: true, new: true },
    //         )
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
    remove: function (req, res) {
        db.User
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
