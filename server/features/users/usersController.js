const { CustomError } = require("@lib/errors");
const { User, parseQuery } = require("@lib/sequelize");

exports.getUsers = async (req, res) => {
  const users = await User.findAll({
    ...parseQuery(req),
  });

  res.status(200).json(users);
};

exports.createUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.create({
    username,
    password,
  });

  res.status(201).json(user);
};

exports.getUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);

  if (!user) {
    throw new CustomError(404, `User with id ${id} not found`);
  }

  res.status(200).json(user);
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);

  if (!user) {
    throw new CustomError(404, `User with id ${id} not found`);
  }

  const { username, password } = req.body;

  await user.update({
    username,
    password,
  });

  res.status(200).json(user);
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);

  if (!user) {
    throw new CustomError(404, `User with id ${id} not found`);
  }

  await user.destroy();

  res.status(204).json();
};
