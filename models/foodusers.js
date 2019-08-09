
module.exports = function(sequelize, DataTypes) {

    var FoodUsers = sequelize.define("FoodUsers", {
      
      userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    foodId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Food',
        key: 'id'
      }
    }
      
    });
  

 
    return FoodUsers;
  };
  