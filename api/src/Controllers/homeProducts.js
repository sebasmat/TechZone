const {Products} = require('../db')

const homeProducts = async () => {
    const allProducts = await Products.findAll();
    const arrayProducts = [];
	let i=0;
	
    while (allProducts.length > i && arrayProducts.length < 9) {
    	arrayProducts.push(allProducts[i])
        i = i + 5
    }
	return arrayProducts;
}

module.exports = homeProducts;