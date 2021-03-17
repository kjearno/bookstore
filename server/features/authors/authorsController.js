const { AppError } = require("@lib/errors");
const { Author, parseQuery } = require("@lib/sequelize");

exports.getAuthors = async (req, res) => {
  const result = await Author.findAndCountAll({
    ...parseQuery(req),
  });

  res.status(200).json(result);
};

exports.createAuthor = async (req, res) => {
  const author = await Author.create(req.body);

  res.status(201).json(author);
};

exports.getAuthor = async (req, res) => {
  const { id } = req.params;

  const author = await Author.findByPk(id);

  if (!author) {
    throw new AppError(404, `Author with id ${id} not found`);
  }

  res.status(200).json(author);
};

exports.updateAuthor = async (req, res) => {
  const { id } = req.params;

  const author = await Author.findByPk(id);

  if (!author) {
    throw new AppError(404, `Author with id ${id} not found`);
  }

  await author.update(req.body);

  res.status(200).json(author);
};

exports.deleteAuthor = async (req, res) => {
  const { id } = req.params;

  const author = await Author.findByPk(id);

  if (!author) {
    throw new AppError(404, `Author with id ${id} not found`);
  }

  await author.destroy();

  res.status(204).json();
};
