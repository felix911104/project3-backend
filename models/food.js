
module.exports = function(sequelize, DataTypes) {

    var Food = sequelize.define("Food", {
      
      day_time: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 300]
        }
      },
      meal_served: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 150]
        }
      },
      people_served: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 150]
        }
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 150]
        }
      },
      name_of_program: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 150]
        }
      },

    });
  
Food.associate = (models) => {
    Food.belongsToMany(models.User, {
      through: 'FoodUsers',
      as: 'users',
      foreignKey: 'foodId'
    });
  };
 
    return Food;
  };
  