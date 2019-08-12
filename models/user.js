
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

 User.associate = (models) => {
    User.belongsToMany(models.Food, {
      through: 'FoodUsers',
      as: 'food',
      foreignKey: 'userId'
    });
  };

   User.associate = (models) => {
    User.belongsToMany(models.Shelter, {
      through: 'ShelterUsers',
      as: 'shelter',
      foreignKey: 'userId'
    });
  };


    User.beforeCreate(function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
      });
    //bcrpt code host.before create
    return User;
  };
  