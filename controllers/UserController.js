const db = require("../models");


// Defining methods for the booksController
module.exports = {
    // Find One - Will need to change it to find by email
    findById: function (req, res) {
        db.User
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //  Create New
    create: function (req, res) {
        db.User
            .create(req.body)
            .then(dbModel => {
                console.log('IN USER CONTROLLER')
                console.log(dbModel)
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    remove: function (req, res) {
        db.User
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
