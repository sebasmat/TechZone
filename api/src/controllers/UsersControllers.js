const { default: axios } = require("axios");
// Requerimos el modelo de la tabla Diet de la base de datos
const { Users } = require("../db");

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
const getRecipesDb = async () => {
	const res = await Recipe.findAll({
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

const getRecipeById = async (id) => {
	const source = isNaN(id) ? "bdd" : "api";

	if (source === "api") {
		const recipe = await axios.get(
			`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&number=100`
		);
		return {
			id: recipe.data.id,
			title: recipe.data.title,
			summary: recipe.data.summary,
			healtscore: recipe.data.healthScore,
			steps: recipe.data.analyzedInstructions[0].steps,
			image: recipe.data.image,
			diets: recipe.data.diets,
		};
	}

	return await Recipe.findByPk(id);
};
const getDietsHandler = async (req, res) => {
  res.send(await getDietsTypesDb());
};


module.exports = { getRecipesApi, getRecipesDb, getRecipeById, getDietsHandler };