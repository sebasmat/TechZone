const { Products } = require("../../db")
const { Op } = require("sequelize")

const findProductByName = async (name, pagea) => {


    numberPage = parseInt(pagea)

    if (numberPage > 0) {
        numberPage = numberPage * 10
    }

    const productByName = await Products.findAndCountAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`,
            }
        },
        limit: 10,
        offset: numberPage,
    })
    return {
        content: productByName.rows,
        totalPages: Math.ceil(productByName.count / 10)
    }
}

module.exports = findProductByName;

