
module.exports = function(sequelize, DataTypes) {

    var ShelterUsers = sequelize.define("ShelterUsers", {
      
      userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    shelterId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Shelter',
        key: 'id'
      }
    }
      
    });
  

 
    return ShelterUsers;
  };
  