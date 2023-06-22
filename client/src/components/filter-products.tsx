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
    await fetch("https://tech-zone-api-n786.onrender.com/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  };

  const resultBrands = async () => {
    await fetch("https://tech-zone-api-n786.onrender.com/brands")
      .then((response) => response.json())
      .then((data) => setBrands(data));
  };

  useEffect(() => {
    resultBrands();
    resultCategories();
  }, []);

  const handleButtonFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (valueCategory == "Todos" && valueBrand == "Todos" && !valuePrice) {
      dispatch(getProducts(0, null, null, null));
    }
    if (valueCategory != "Todos" && valueBrand != "Todos" && valuePrice) {
      dispatch(getProducts(null, valueCategory, valueBrand, valuePrice));
    }
    if (valueCategory != "Todos" && valueBrand == "Todos" && !valuePrice) {
      dispatch(getProducts(null, valueCategory, null, null));
    }
    if (valueCategory == "Todos" && valueBrand != "Todos" && !valuePrice) {
      dispatch(getProducts(null, null, valueBrand, null));
    }
    if (valueCategory == "Todos" && valueBrand == "Todos" && valuePrice) {
      dispatch(getProducts(0, null, null, valuePrice));
    }
    if (valueCategory != "Todos" && valueBrand != "Todos" && !valuePrice) {
      dispatch(getProducts(null, valueCategory, valueBrand, null));
    }
    if (valueCategory != "Todos" && valueBrand == "Todos" && valuePrice) {
      dispatch(getProducts(null, valueCategory, null, valuePrice));
    }
    if (valueCategory == "Todos" && valueBrand != "Todos" && valuePrice) {
      dispatch(getProducts(null, null, valueBrand, valuePrice));
    }
  };

  const handleButtonRefresh = (event:React.MouseEvent<HTMLButtonElement>) => {
    setValueCategory("")
    setValueBrand("")
    setValuePrice("")
    dispatch(getProducts(0, null, null, null))
  }
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
          Filtros
        </label>
        {/* <button
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
        </button> */}
        <label htmlFor="category" className="text-white font-semibold">
          Categorias
        </label>
        <select
        value={valueCategory}
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
        value={valueBrand}
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
      <br />
      <div>
        <button
          className="bg-white rounded-full px-3 text-center mr-2 mb-2 hover:bg-violet-500 active:bg-violet-200 focus:outline-none focus:ring focus:ring-violet-300"
          onClick={handleButtonFilter}
        >
          Filtrar
        </button>
      </div>
      <div>
        <button className="bg-white rounded-full px-3 text-center mr-2 mb-2 hover:bg-violet-500 active:bg-violet-200 focus:outline-none focus:ring focus:ring-violet-300" 
        onClick={handleButtonRefresh}
        >
          Refrescar
        </button>
      </div>
    </div>
  );
};

export default FilterProducts;
