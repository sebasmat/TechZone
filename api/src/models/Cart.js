const { DataTypes} = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Cart",{
        id:{
            type: DataTypes.UUID,
            primaryKey:true,
            unique: true,
            defaultValue: DataTypes.UUID
        },
        products: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull:true
        }

    }

    )
}