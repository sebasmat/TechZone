const {
	getProductsById,
	  getProductsDb
} = require("../controllers/UsersControllers");

const { Products } = require("../db");

const getProductsHandler = async (req, res) => {
	const { name } = req.query;

	const db = await Promise.all([getProductsDb]);

	const allProducts = [db];

	if (name) {
		try {
			let filterProducts = allProducts.filter((x) =>
				x.name.toLowerCase().includes(name.toLowerCase())
			);

			filterRecipe.length
				? res.status(200).send(filterRecipe)
				: res.status(401).send("No existe producto con ese nombre");
		} catch (error) {
			return res.status(401).send("Error");
		}
	} else {
		res.send(allProducts);
	}
};

const getProductsIdHandler = async (req, res) => {
	const { id } = req.params;

	const recipe = await getProductsById(id);
	res.status(200).json(Products);
};

const postProductsHandler = async (req, res) => {
	const { name, images, description, price, avalaible } = req.body;

	let producto = await Products.create({
		name,
		images,
		description,
	    price,
		avalaible
	});
	res.send("Ok");
};

module.exports = { getProductsIdHandler, getProductsHandler, postProductsHandler };