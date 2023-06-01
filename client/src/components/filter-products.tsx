import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import ProductInterface from "@/interfaces/productsInterface";

type Props = {
  arrayProducts: ProductInterface[];
  productsFiltered: ProductInterface[];
  setProductsFiltered: Dispatch<SetStateAction<ProductInterface[]>>;
};
const FilterProducts = ({ arrayProducts, setProductsFiltered }: Props) => {
  const [valueArrayCategory, setArrayValueCategory] = useState<string[]>([]);
  const [valueArrayBrand, setArrayValueBrand] = useState<string[]>([]);
  const [valueCategory, setValueCategory] = useState("Todos");
  const [valueBrand, setValueBrand] = useState("Todos");
  const [valuePrice, setValuePrice] = useState("");
  const [valueStock, setValueStock] = useState("");
  const [orderBy, setOrderBy] = useState("ASC");

  useEffect(() => {
    const getUniqueCategories = () => {
      const unique = new Set(arrayProducts.map((product) => product.category));
      const uniqueArray = Array.from(unique);
      setArrayValueCategory(["Todos", ...uniqueArray]);
    };
    const getUniqueBrands = () => {
      const unique = new Set(arrayProducts.map((product) => product.brand));
      const uniqueArray = Array.from(unique);
      setArrayValueBrand(["Todos", ...uniqueArray]);
    };
    getUniqueCategories();
    getUniqueBrands();
  }, [arrayProducts]);

  useEffect(() => {
    setProductsFiltered(arrayProducts);
    setProductsFiltered(
      arrayProducts.sort((a, b) => {
        if (orderBy === "ASC") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      })
    );
    setProductsFiltered(
      arrayProducts
        .filter((product) => {
          return valueCategory !== "Todos"
            ? product.category === valueCategory
            : true;
        })
        .filter((product) =>
          valueBrand !== "Todos" ? product.brand === valueBrand : true
        )
        .filter((product) =>
          valueStock !== "" && Number(valueStock) > 0
            ? product.stock <= Number(valueStock)
            : true
        )
        .filter((product) =>
          valuePrice !== "" && Number(valuePrice) > 0
            ? product.price <= Number(valuePrice)
            : true
        )
    );
  }, [
    arrayProducts,
    valueCategory,
    valueBrand,
    valuePrice,
    valueStock,
    orderBy,
  ]);

  return (
    <div>
      <div className="flex flex-col gap-2">
        <label className="text-teal-500 font-semibold" htmlFor="category">
          Order by Price
        </label>
        <button className="text-left" onClick={() => setOrderBy("ASC")}>
          ASC
        </button>
        <button className="text-left" onClick={() => setOrderBy("DESC")}>
          DESC
        </button>
        <label htmlFor="category" className="text-teal-500 font-semibold">
          Categories
        </label>
        {valueArrayCategory.map((category, i) => {
          return (
            <button
              key={i}
              onClick={() => {
                setValueCategory(category);
              }}
              className="text-left"
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="brand" className="text-teal-500 font-semibold">
          Brands
        </label>
        {valueArrayBrand.map((brand, i) => {
          return (
            <button
              key={i}
              onClick={() => {
                setValueBrand(brand);
              }}
              className="text-left"
            >
              {brand}
            </button>
          );
        })}
      </div>

      <div>
        <label htmlFor="price" className="text-teal-500 font-semibold">
          Price
        </label>
        <input
          type="number"
          name="price"
          id="price"
          value={valuePrice}
          onChange={(e) => {
            setValuePrice(e.target.value);
          }}
          className="border border-none outline-none bg-teal-100"
        />
      </div>
      <div>
        <label htmlFor="stock" className="text-teal-500 font-semibold">
          Stock
        </label>
        <input
          type="number"
          name="stock"
          id="stock"
          value={valueStock}
          onChange={(e) => {
            setValueStock(e.target.value);
          }}
          className="border border-none outline-none bg-teal-100"
        />
      </div>
    </div>
  );
};

export default FilterProducts;
