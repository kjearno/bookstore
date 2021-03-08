const { CustomError } = require("@lib/errors");
const { Author, parseQuery } = require("@lib/sequelize");

exports.getAuthors = async (req, res) => {
  const authors = await Author.findAll({
    ...parseQuery(req),
  });

  res.status(200).json(authors);
};

exports.createAuthor = async (req, res) => {
  const { name } = req.body;

  const author = await Author.create({
    name,
  });

  res.status(201).json(author);
};

exports.getAuthor = async (req, res) => {
  const { id } = req.params;
  const author = await Author.findByPk(id);

  if (!author) {
    throw new CustomError(404, `Author with id ${id} not found`);
  }

  res.status(200).json(author);
};

exports.updateAuthor = async (req, res) => {
  const { id } = req.params;
  const author = await Author.findByPk(id);

  if (!author) {
    throw new CustomError(404, `Author with id ${id} not found`);
  }

  const { name } = req.body;

  await author.update({
    name,
  });

  res.status(200).json(author);
};

exports.deleteAuthor = async (req, res) => {
  const { id } = req.params;
  const author = await Author.findByPk(id);

  if (!author) {
    throw new CustomError(404, `Author with id ${id} not found`);
  }

  await author.destroy();

  res.status(204).json();
};
