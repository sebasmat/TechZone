const {Users, Products, Favorites} = require ("../../db")

const addFav = async (item) => {
    await Favorites.create({
        UserId : item.userId,
        ProductId : item.productId,
    });

    const Fav = await Users.findOne({
        where: {id: item.userId },
        include: Products,
    });
    return Fav;
}

module.exports = addFav;