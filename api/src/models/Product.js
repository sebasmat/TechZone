const { DataTypes} = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Products",
    {
      name: {
        type: DataTypes.STRING,
        unique: true,
      },
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      brand:{
        type: DataTypes.STRING,
      },
      category:{
        type: DataTypes.STRING,
      },
      images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },

      description: {
        type: DataTypes.TEXT,
        AllowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
      },
      avalaible: {
        type: DataTypes.BOOLEAN,
        // allowNull: false
      },
      stock: {
        type: DataTypes.INTEGER,
      }

    },
    { timestamps: false }
  );
};