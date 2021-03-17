const { AppError } = require("@lib/errors");
const { User, parseQuery } = require("@lib/sequelize");

exports.getUsers = async (req, res) => {
  const result = await User.findAndCountAll({
    ...parseQuery(req),
  });

  res.status(200).json(result);
};

exports.createUser = async (req, res) => {
  const user = await User.create(req.body);

  res.status(201).json(user);
};

exports.getUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findByPk(id);

  if (!user) {
    throw new AppError(404, `User with id ${id} not found`);
  }

  res.status(200).json(user);
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findByPk(id);

  if (!user) {
    throw new AppError(404, `User with id ${id} not found`);
  }

  await user.update(req.body);

  res.status(200).json(user);
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findByPk(id);

  if (!user) {
    throw new AppError(404, `User with id ${id} not found`);
  }

  await user.destroy();

  res.status(204).json();
};
