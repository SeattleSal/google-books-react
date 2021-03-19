const router = require('express').Router();
const booksController = require("../../controllers/booksController");
const Book = require("../../models/Book")

router.route("/")
.get((req, res) => {
    Book.find()
    .then(books => res.json(books))
    .catch(err => console.log("Find error: " + err));
})
// .get(booksController.findAll);
// .post(booksController.create);

router.post("/", (req, res) => {
    const { title, authors, description, imgURL, link } = req.body;

    Book.create({
        title, authors, description, imgURL, link
    })
    .then(newBook => res.json(newBook))
    .catch(err => console.log("Create error: " + err));
})

router
  .route("/:id")
  .get(booksController.findById);
//   .delete(booksController.remove)

  router.delete("/:id", (req, res) => {
      booksController.remove(req);
  })

module.exports = router;
