const { DataTypes, autoIncrement } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Products",
    {
      name: {
        type: DataTypes.STRING,
        unique: true
      },
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      images: {
        type: DataTypes.ARRAY,
        allowNull:true,
      },
      description:{
        type: DataTypes.TEXT,
        AllowNull:false,
      },
      price: {
        type: DataTypes.NUMBER,
        allowNull: false,
      } ,
      avalaible: {
        type: DataTypes.BOOLEAN,
        allowNull:false
      }

    },
    { timestamps: false }
  );
};