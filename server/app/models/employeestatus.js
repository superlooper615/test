/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employeestatus', {
    employeeStatusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    employeeStatus: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'employeestatus',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "employeeStatusId" },
        ]
      },
    ]
  });
};