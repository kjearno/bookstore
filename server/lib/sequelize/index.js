/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const fs = require("fs");
const path = require("path");
const appRoot = require("app-root-path");
const { Sequelize, DataTypes } = require("sequelize");
const testConnection = require("./testConnection");

const env = process.env.NODE_ENV || "development";
const config = require("./db/config")[env];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);

if (env === "development") {
  testConnection(sequelize);
}

const featuresDir = path.join(`${appRoot}/features`);

function setModels(feature, matchedModels) {
  matchedModels.forEach((matchedModel) => {
    const model = require(path.join(featuresDir, feature, matchedModel))(
      sequelize,
      DataTypes
    );

    db[model.name] = model;
  });
}

fs.readdirSync(featuresDir).forEach((feature) => {
  const matchedModels = fs
    .readdirSync(path.join(featuresDir, feature))
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
