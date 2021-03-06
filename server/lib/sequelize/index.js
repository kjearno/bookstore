/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const fs = require("fs");
const path = require("path");
const appRoot = require("app-root-path");
const { Sequelize, DataTypes } = require("sequelize");
const testConnection = require("./testConnection");

const db = {};
const sequelize = new Sequelize(process.env.DB_URI);

testConnection(sequelize);

const features = path.join(`${appRoot}/features`);

function setModels(feature, matchedModels) {
  matchedModels.forEach((matchedModel) => {
    const model = require(path.join(features, feature, matchedModel))(
      sequelize,
      DataTypes
    );

    db[model.name] = model;
  });
}

fs.readdirSync(features).forEach((feature) => {
  const matchedModels = fs
    .readdirSync(path.join(features, feature))
    .filter((file) => file.match(/^[A-Z]/));

  setModels(feature, matchedModels);
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
