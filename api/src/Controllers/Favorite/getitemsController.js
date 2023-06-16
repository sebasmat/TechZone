const {Users, Products, Favorites} = require ("../../db")

const getItemsControllerFav = async (userId) => {
    const Fav = await Users.findOne({
    where : { id: userId } ,
    include: Products,
    });
    return Fav;
};

module.exports = getItemsControllerFav;