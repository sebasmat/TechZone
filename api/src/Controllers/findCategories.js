const { Products } = require('../db')

const findCategories = async () => {
    const categories = await Products.findAll({
        attributes: ["category"],
        group: ["category"]
    }
    );
    return categories
}

module.exports = findCategories;