const { Products } = require("../../db")
const updateStockById = async (products) => {
    const productos = [];
    products.forEach(async (product) => {
        const idProduct = await Products.findByPk(product.id);
        const aux = idProduct.stock - product.quantity;
        await Products.update({ 
            stock: aux,
          },
          {
            where:{id: product.id}
          });
        productos.push(idProduct);
    });
    console.log("este es el array con el stock modificado", productos);
    return productos;
    // const product = await Products.findByPk(id);
    // product.stock = product.stock - quantity;
    // return product;
}
module.exports = updateStockById;