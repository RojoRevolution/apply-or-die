const db = require("../models");


// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.Application
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Application
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Application
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    console.log(req.params.id)
    console.log(req.body)
    db.Application
      .findByIdAndUpdate(
        req.params.id,
        {
          $push:
            { notes: req.body }
        }
      )
      // .findOneAndUpdate({ _id: req.params.id }, { notes: notes.push(req.body) })

      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Application
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
