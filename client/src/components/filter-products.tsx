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
    <div className="bg-violet-800 p-5 rounded-br-xl">
      <div className="flex flex-col gap-2">
        <label className="text-white font-semibold" htmlFor="category">
          Order by Price
        </label>
        <button className="bg-white rounded-xl font-semibold hover:bg-violet-200" onClick={() => setOrderBy("ASC")}>
          ASC
        </button>
        <button className="bg-white rounded-xl font-semibold hover:bg-violet-200" onClick={() => setOrderBy("DESC")}>
          DESC
        </button>
        <label htmlFor="category" className="text-white font-semibold">
          Categories
        </label>
        <select className="bg-white rounded-xl font-semibold hover:bg-violet-200"
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => { setValueCategory(event.currentTarget.value) }}>
          {valueArrayCategory.map((category, i) => {
            return (<option value={category}>{category}</option>)
          })}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="brand" className="text-white font-semibold">
          Brands
        </label>
        <select className="bg-white rounded-xl font-semibold hover:bg-violet-200"
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => { setValueBrand(event.currentTarget.value) }}>
          {valueArrayBrand.map((brand) => {
            return (<option value={brand}>{brand}</option>)
          })}
        </select>
      </div>

      <div>
        <label htmlFor="price" className="text-white font-semibold">
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
          className="bg-white px-2 rounded-xl font-semibold bg-violet-200"
        />
      </div>
      <div>
        <label htmlFor="stock" className="text-white font-semibold">
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
          className="bg-white px-2 rounded-xl font-semibold bg-violet-200"
        />
      </div>
    </div>
  );
};

export default FilterProducts;
