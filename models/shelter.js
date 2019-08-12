
module.exports = function(sequelize, DataTypes) {

    var Shelter = sequelize.define("Shelter", {
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
        type: DataTypes.TEXT,
        allowNull: true,
      },
      Link: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    });

Shelter.associate = (models) => {
    Shelter.belongsToMany(models.User, {
      through: 'ShelterUsers',
      as: 'users',
      foreignKey: 'shelterId'
    });
  };
    return Shelter;
  };
  