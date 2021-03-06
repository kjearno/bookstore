const { Router } = require("express");
const { authController } = require("@features/auth");
const categoriesController = require("./categoriesController");

const router = Router();

router
  .route("/")
  .get(categoriesController.getCategories)
  .post(authController.protect, categoriesController.createCategory);

router
  .route("/:id")
  .get(categoriesController.getCategory)
  .patch(authController.protect, categoriesController.updateCategory)
  .delete(authController.protect, categoriesController.deleteCategory);

module.exports = router;
