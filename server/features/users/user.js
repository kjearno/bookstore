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
          len: [3, 32],
          notEmpty: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,

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

  // Hooks
  User.beforeSave(async (user) => {
    if (user.changed("password")) {
      const hash = await bcrypt.hash(user.password, 10);
      user.password = hash;
    }
  });

  // Instance methods
  User.prototype.comparePassword = async (plainPassword, hashedPassword) =>
    bcrypt.compare(plainPassword, hashedPassword);

  return User;
};
