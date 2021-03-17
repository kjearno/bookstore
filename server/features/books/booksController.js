const { AppError } = require("@lib/errors");
const { Book, parseQuery } = require("@lib/sequelize");

exports.getBooks = async (req, res) => {
  const result = await Book.findAndCountAll({
    ...parseQuery(req),
  });

  res.status(200).json(result);
};

exports.createBook = async (req, res) => {
  const book = await Book.create(req.body);

  res.status(201).json(book);
};

exports.getBook = async (req, res) => {
  const { id } = req.params;

  const book = await Book.findByPk(id);

  if (!book) {
    throw new AppError(404, `Book with id ${id} not found`);
  }

  res.status(200).json(book);
};

exports.updateBook = async (req, res) => {
  const { id } = req.params;

  const book = await Book.findByPk(id);

  if (!book) {
    throw new AppError(404, `Book with id ${id} not found`);
  }

  await book.update(req.body);

  res.status(200).json(book);
};

exports.deleteBook = async (req, res) => {
  const { id } = req.params;

  const book = await Book.findByPk(id);

  if (!book) {
    throw new AppError(404, `Book with id ${id} not found`);
  }

  await book.destroy();

  res.status(204).json();
};
