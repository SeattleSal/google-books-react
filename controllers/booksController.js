const { Book } = require("../models");

module.exports = {
  findAll: function (req, res) {
    Book.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    console.log(req);
    Book.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log(req.body);
    Book.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    console.log("Remove: " + req.params.id);
    Book.findByIdAndDelete(req.params.id)
      .then((deletedBook) => res.json(deletedBook))
      .catch((err) => res.status(422).json(err));
  }
};
