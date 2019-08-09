
module.exports = function(sequelize, DataTypes) {

    var Clinic = sequelize.define("Clinic", {
      Name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      DaysOfOperation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      PhoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ClientsServed: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Services: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      Notes: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Link: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    });

    return Clinic;
  };
  