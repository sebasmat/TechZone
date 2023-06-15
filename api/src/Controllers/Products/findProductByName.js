const {Products} = require("../../db");
const {Op} = require("sequelize")

const getProductsByName = async (req, res) => {
  const { name } = req.query;

  const pageAsNumber = Number.parseInt(req.query.page)
  const sizeAsNumber = Number.parseInt(req.query.size)

  const filterOptions = {
    name: {
        [Op.like]: `%${name}%`
    }
  };
  let page = 1;
        if (!Number.isNaN(pageAsNumber) && pageAsNumber > 1) {
            page = pageAsNumber
        }

        let size = 5
        if (!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && sizeAsNumber < 5) {
            size = sizeAsNumber
        }

  try {
    const allProducts = await Products.findAndCountAll({
      where: filterOptions,
      limit: size,
      offset: ( page - 1) * size,
    });

    const totalPages = Math.ceil(allProducts.count / size);

    res.json({
      totalPages,
      content: allProducts.rows,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = getProductsByName
