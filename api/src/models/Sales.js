const { DataTypes} = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Sales",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      UserId: {
        type: DataTypes.INTEGER, 
      },
    },
    { timestamps: false }
  );
};