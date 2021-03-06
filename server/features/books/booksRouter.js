const { Router } = require("express");
const { authController } = require("@features/auth");
const booksController = require("./booksController");

const router = Router();

router
  .route("/")
  .get(booksController.getBooks)
  .post(authController.protect, booksController.createBook);

router
  .route("/:id")
  .get(booksController.getBook)
  .patch(authController.protect, booksController.updateBook)
  .delete(authController.protect, booksController.deleteBook);

module.exports = router;
