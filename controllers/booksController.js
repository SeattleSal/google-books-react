const { Book } = require("../models");

module.exports = {
  findAll: function (req, res) {
    Book.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    Book.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    Book.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    Book.findByIdAndDelete(req.params.id)
      .then((deletedBook) => res.json(deletedBook))
      .catch((err) => res.status(422).json(err));
  }
};
