const { Products} = require('../db');
const data = require("../data.json")


const fillDB = () => {
    data.forEach((product) => {
        Products.findOrCreate({
            where: {
                name: product.name,

            },
            defaults: {
                category: product.category,
                brand: product.brand,
                images: [product.imageCard, product.imageDetail],
                description: product.description,
                price: product.price,
                avalaible: product.available,
                stock: product.stock,
            }
        })
    });
}

module.exports = fillDB;