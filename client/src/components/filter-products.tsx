import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import ProductInterface from "@/interfaces/productsInterface";
import categoriesInterface from "@/interfaces/categoriesInterface";
import brandsInterface from "@/interfaces/brandsInterface";
import { useDispatch } from "react-redux";
import { getProducts } from "@/store/actionCreators/getProducts";

// type Props = {
//   arrayProducts: ProductInterface[];
//   productsFiltered: ProductInterface[];
//   setProductsFiltered: Dispatch<SetStateAction<ProductInterface[]>>;
// };
const FilterProducts = () => {
  const [valueArrayCategory, setArrayValueCategory] = useState<string[]>([]);
  const [valueArrayBrand, setArrayValueBrand] = useState<string[]>([]);
  const [valueCategory, setValueCategory] = useState("Todos");
  const [valueBrand, setValueBrand] = useState("Todos");
  const [valuePrice, setValuePrice] = useState("");
  const [valueStock, setValueStock] = useState("");
  const [orderBy, setOrderBy] = useState("ASC");
  const [categories, setCategories] = useState<categoriesInterface[]>([]);
  const [brands, setBrands] = useState<brandsInterface[]>([]);

  const dispatch = useDispatch();

  const resultCategories = async () => {
    await fetch("http://localhost:3001/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  };

  const resultBrands = async () => {
    await fetch("http://localhost:3001/brands")
      .then((response) => response.json())
      .then((data) => setBrands(data));
  };

  useEffect(() => {
    resultBrands();
    resultCategories();
  }, []);

  const handleButtonFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (valueCategory == "Todos" && valueBrand == "Todos") {
      dispatch(getProducts(0, null, null));
    }
    if (valueCategory != "Todos" && valueCategory != "Todos") {
      dispatch(getProducts(null, valueCategory, valueBrand));
    }
    if (valueCategory != "Todos" && valueBrand == "Todos") {
      dispatch(getProducts(null, valueCategory, null));
    }
    if (valueCategory == "Todos" && valueBrand != "Todos") {
      dispatch(getProducts(null, null, valueBrand));
    }
  };

  // useEffect(() => {
  //   const getUniqueCategories = () => {
  //     const unique = new Set(arrayProducts.map((product) => product.category));
  //     const uniqueArray = Array.from(unique);
  //     setArrayValueCategory(["Todos", ...uniqueArray]);
  //   };
  //   const getUniqueBrands = () => {
  //     const unique = new Set(arrayProducts.map((product) => product.brand));
  //     const uniqueArray = Array.from(unique);
  //     setArrayValueBrand(["Todos", ...uniqueArray]);
  //   };
  //   getUniqueCategories();
  //   getUniqueBrands();
  // }, [arrayProducts]);

  // useEffect(() => {
  //   setProductsFiltered(arrayProducts);
  //   setProductsFiltered(
  //     arrayProducts.sort((a, b) => {
  //       if (orderBy === "ASC") {
  //         return a.price - b.price;
  //       } else {
  //         return b.price - a.price;
  //       }
  //     })
  //   );
  //   setProductsFiltered(
  //     arrayProducts
  //       .filter((product) => {
  //         return valueCategory !== "Todos"
  //           ? product.category === valueCategory
  //           : true;
  //       })
  //       .filter((product) =>
  //         valueBrand !== "Todos" ? product.brand === valueBrand : true
  //       )
  //       .filter((product) =>
  //         valueStock !== "" && Number(valueStock) > 0
  //           ? product.stock <= Number(valueStock)
  //           : true
  //       )
  //       .filter((product) =>
  //         valuePrice !== "" && Number(valuePrice) > 0
  //           ? product.price <= Number(valuePrice)
  //           : true
  //       )
  //   );
  // }, [
  //   arrayProducts,
  //   valueCategory,
  //   valueBrand,
  //   valuePrice,
  //   valueStock,
  //   orderBy,
  // ]);

  return (
    <div className="bg-violet-800 p-5 rounded-br-xl max-w-[280px]  ">
      <div className="flex flex-col gap-2">
        <label className="text-white font-semibold" htmlFor="category">
          Orden por precio
        </label>
        <button
          className="bg-white rounded-xl font-semibold hover:bg-violet-200"
          onClick={() => setOrderBy("ASC")}
        >
          Ascendente
        </button>
        <button
          className="bg-white rounded-xl font-semibold hover:bg-violet-200"
          onClick={() => setOrderBy("DESC")}
        >
          Descendente
        </button>
        <label htmlFor="category" className="text-white font-semibold">
          Categorias
        </label>
        <select
          className="bg-white rounded-xl font-semibold hover:bg-violet-200"
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            setValueCategory(event.currentTarget.value);
          }}
        >
          <option>Todos</option>
          {categories.map((category, index) => {
            return (
              <option key={index} value={category.category}>
                {category.category}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="brand" className="text-white font-semibold">
          Marcas
        </label>
        <select
          className="bg-white rounded-xl font-semibold hover:bg-violet-200"
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            setValueBrand(event.currentTarget.value);
          }}
        >
          <option>Todos</option>
          {brands.map((brand, index) => {
            return (
              <option key={index} value={brand.brand}>
                {brand.brand}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <label htmlFor="price" className="text-white font-semibold">
          Precio máximo
        </label>
        <input
          type="number"
          name="price"
          id="price"
          value={valuePrice}
          onChange={(e) => {
            setValuePrice(e.target.value);
          }}
          className="bg-white px-2 rounded-xl font-semibold bg-violet-200"
        />
      </div>
      <div>
        <button className="bg-white" onClick={handleButtonFilter}>
          Filtrar
        </button>
      </div>
    </div>
  );
};

export default FilterProducts;
