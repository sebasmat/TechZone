const {Users, Products, Favorites} = require ("../../db");

const RemoveItemFav = async (userId, productId) => {
    const deleteFav = await Favorites.destroy({
        where : {
            UserId : userId,
            ProductsId: productId
        },
    });
    return deleteFav;
}

module.exports = RemoveItemFav