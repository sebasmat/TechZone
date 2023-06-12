const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Users",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true
      },

      profileIMG: {
        type: DataTypes.STRING,
        allowNull: true
      },
      direction : {
        type: DataTypes.STRING,
        allowNull: true
      },
      cellPhone: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      Gender: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    { timestamps: false }
  );
};