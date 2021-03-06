const { Router } = require("express");
const { authController } = require("@features/auth");
const usersController = require("./usersController");

const router = Router();

router
  .route("/")
  .get(usersController.getUsers)
  .post(authController.protect, usersController.createUser);

router
  .route("/:id")
  .get(usersController.getUser)
  .patch(authController.protect, usersController.updateUser)
  .delete(authController.protect, usersController.deleteUser);

module.exports = router;
