const { Products } = require("../../db")
const { Op } = require("sequelize")

const findProductByName = async (name) => {
    const productByName = await Products.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`,
            }
        }
    })
    return productByName;
}

module.exports = findProductByName;

