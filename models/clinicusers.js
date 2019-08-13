
module.exports = function(sequelize, DataTypes) {

    var ClinicUsers = sequelize.define("ClinicUsers", {
      
      userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    ClinicId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Clinic',
        key: 'id'
      }
    }
      
    });
  

 
    return ClinicUsers;
  };
  