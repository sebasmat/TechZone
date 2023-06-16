const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "Review",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoincrement: true,
            },
            review: {
                type: DataTypes.STRING,
                allowNull: true,
                unique: true,
            },
            score: {
                type: DataTypes.INTEGER,
                allowNull: true,
                unique: true,
            }
        },
        { timestamps: false }
    )
}

