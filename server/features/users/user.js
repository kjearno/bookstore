const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          minLength(username) {
            if (username.length < 3) {
              throw new Error("Username must be at least 3 characters");
            }
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          minLength(password) {
            if (password.length < 8) {
              throw new Error("Password must be at least 8 characters");
            }
          },
        },
      },
    },
    {
      tableName: "users",
      underscored: true,
      defaultScope: {
        attributes: {
          exclude: ["password"],
        },
      },
    }
  );

  // hooks
  User.beforeSave(async (user) => {
    if (user.changed("password")) {
      const hash = await bcrypt.hash(user.password, 10);
      user.password = hash;
    }
  });

  // instance methods
  User.prototype.comparePassword = async (plainPassword, hashedPassword) =>
    bcrypt.compare(plainPassword, hashedPassword);

  return User;
};
