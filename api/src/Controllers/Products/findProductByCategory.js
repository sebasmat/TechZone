const {Products} = require("../../db");

const getProductsByCategory = async (req, res) => {
  const { category } = req.query;

  const pageAsNumber = Number.parseInt(req.query.page)
  const sizeAsNumber = Number.parseInt(req.query.pageSize)

  const filterOptions = {
    category: category
  };
  let page = 0;
        if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
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
      offset: page * size,
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

module.exports = getProductsByCategory