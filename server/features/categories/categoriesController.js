const { CustomError } = require("@lib/errors");
const { Category, parseQuery } = require("@lib/sequelize");

exports.getCategories = async (req, res) => {
  const categories = await Category.findAll({
    ...parseQuery(req),
  });

  res.status(200).json(categories);
};

exports.createCategory = async (req, res) => {
  const { name } = req.body;

  const category = await Category.create({
    name,
  });

  res.status(201).json(category);
};

exports.getCategory = async (req, res) => {
  const { id } = req.params;
  const category = await Category.findByPk(id);

  if (!category) {
    throw new CustomError(404, `Category with id ${id} not found`);
  }

  res.status(200).json(category);
};

exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  const category = await Category.findByPk(id);

  if (!category) {
    throw new CustomError(404, `Category with id ${id} not found`);
  }

  const { name } = req.body;

  await category.update({
    name,
  });

  res.status(200).json(category);
};

exports.deleteCategory = async (req, res) => {
  const { id } = req.params;
  const category = await Category.findByPk(id);

  if (!category) {
    throw new CustomError(404, `Category with id ${id} not found`);
  }

  await category.destroy();

  res.status(204).json();
};
