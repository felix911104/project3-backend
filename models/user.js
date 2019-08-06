
const bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {

    var User = sequelize.define("User", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [1]
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 25]
        }
      }
    });
    User.beforeCreate(function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
      });
    //bcrpt code host.before create
    return User;
  };
  