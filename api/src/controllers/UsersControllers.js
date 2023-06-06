const { default: axios } = require("axios");
// Requerimos el modelo de la tabla Diet de la base de datos
const { Users , Products } = require("../db");

const getAllUsersDb = async () => {
  // Utilizamos el metodo finAll de sequelize en el modelo Diet para acceder a todos los atributos
  const UsersAll = await Users.findAll({
    // mediante la opcion attributes especificamos cuales son los unicos que queremos
    attributes: ["name", "id", "email","password", "favorite", "profileIMG" ],
  });
  return UsersAll;

};

const postUsers = async () => {
  const dietsTypes = await getDietsTypesApi();
  let allDietTypes = dietsTypes.map((e) =>
    Diet.findOrCreate({ where: { name: e } })
  );
  Promise.all(allDietTypes).then((e) => console.log("Dietas Cargadas"));
};

module.exports = { getAllUsersDb, postUsers };
const getProductsDb = async () => {
	const res = await Products.findAll({
		attributes: ["id", "name", "images", "description", "price", "avalaible"],
		
	});

	return await res.map((x) => {
		return {
			id: x.dataValues.id,
			name: x.dataValues.name,
			images: x.dataValues.images,
		 	description: x.dataValues.description,
			price: x.dataValues.price,
			avalaible:x.dataValues.avalaible
		};
	});
};

const getProductsById = async (id) => {
	return await Products.findByPk(id);
};
const getUserHandler = async (req, res) => {
  res.send(await getAllUsersDb());
};


module.exports = { getProductsById, getProductsDb, getUserHandler,  };