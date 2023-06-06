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
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull:true,
      },
      
      description:{
        type: DataTypes.TEXT,
        AllowNull:false,
      },
      price: {
        type: DataTypes.INTEGER,
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