const { Router } = require("express");
const { authController } = require("@features/auth");
const authorsController = require("./authorsController");

const router = Router();

router
  .route("/")
  .get(authorsController.getAuthors)
  .post(authController.protect, authorsController.createAuthor);

router
  .route("/:id")
  .get(authorsController.getAuthor)
  .patch(authController.protect, authorsController.updateAuthor)
  .delete(authController.protect, authorsController.deleteAuthor);

module.exports = router;
