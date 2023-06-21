import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCategories } from "@/hooks/products/useCategories";
import { useTypedSelector } from "@/store/useTypeSelector";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { deleteProduct } from "@/store/actionCreators/deleteProduct";
import { useRouter } from "next/router";
import Link from "next/link";

const ProductFormUpdate = () => {
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    category: "",
    description: "",
    price: 0,
    images: [] as File[],
    stock: 0,
  });

  const { detail } = useTypedSelector((state) => state.product);
  const dispatch = useDispatch();
  console.log("esto es detail", detail);
  
  const router = useRouter();

  const categories = useCategories();

  const handleValueChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const images = Array.from(event.target.files);
      setProduct((prevProduct) => ({ ...prevProduct, images }));
    }
  };

  const putProduct = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const isDataValid = Object.values(product).every(Boolean);

    if (!isDataValid) {
      alert(
        "No es posible crear el producto si no están llenos todos los datos"
      );
      return;
    }

    try {
      let urls = detail[0].images[0];
      if (product.images.length > 0) {
        const formData = new FormData();
        product.images.forEach((image) => formData.append("image", image));
        const response = await axios.post(
          "https://api.imgbb.com/1/upload?key=49a1b0e207191c858c5ee634e59c96bc",
          formData
        );
        urls = response.data.data.display_url;
      }
      await axios.put("http://localhost:3001/update", {
        ...product,
        price: parseFloat(product.price.toString()),
        stock: parseInt(product.stock.toString()),
        images: [urls, urls],
        avalaible: true,
      });  
      alert("El producto fue creado con éxito");
    } catch (error) {
      alert("No fue posible crear el producto, por favor inténtelo más tarde");
      console.log(error);
    } finally {
      setProduct({
        name: "",
        brand: "",
        category: "",
        description: "",
        price: 0,
        images: [] as File[],
        stock: 0,
      });
      dispatch(deleteProduct());
      router.push("/admin/products");
    }
  };

  useEffect(() => {
    console.log(`this is detail: ${detail[0]}`);
    if (detail[0] === undefined) return;
    setProduct({
      ...product,
      name: detail[0].name,
      brand: detail[0].brand,
      category: detail[0].category,
      description: detail[0].description,
      price: detail[0].price,
      stock: detail[0].stock,
    });
  }, [detail]);

  return (
    <div className="p-4 py-0 rounded-xl drop-shadow-2xl shadow-violet-950 ">
      <div className="flex justify-center py-10 text-4xl text-violet-950 ">
        <h1>Editar - {product.name}</h1>
      </div>
      {detail[0]?.images.length > 0 && (
        <Image
          src={detail[0].images[0]}
          alt={product.name}
          width={300}
          height={300}
        />
      )}
      <div className="py-3 text-xl">
        <label>Nombre: </label>
        <input
          name="name"
          value={product.name}
          onChange={handleValueChange}
          type="text"
          className="mx-3 px-4 py-1 rounded-xl focus:bg-violet-200 focus:outline-none focus:ring focus:ring-violet-950"
        />
      </div>
      <div className="py-3 text-xl">
        <label>Marca: </label>
        <input
          name="brand"
          value={product.brand}
          onChange={handleValueChange}
          type="text"
          className="mx-3 px-4 py-1 rounded-xl focus:bg-violet-200 focus:outline-none focus:ring focus:ring-violet-950"
        />
      </div>
      <div className="py-3 text-xl">
        <label>Categoría</label>
        <select
          name="category"
          value={product.category}
          className="mx-3 px-4 bg-white py-1 rounded-xl focus:bg-violet-200 focus:outline-none focus:ring focus:ring-violet-950"
          onChange={handleValueChange}
        >
          <option></option>
          {categories.map((category) => {
            return (
              <option key={category.category} value={category.category}>
                {category.category}
              </option>
            );
          })}
        </select>
      </div>
      <div className="py-3 text-xl">
        <label>Descripción: </label>
        <textarea
          name="description"
          value={product.description}
          onChange={handleValueChange}
          className="mx-3 mt-5 px-4 py-1 rounded-xl focus:bg-violet-200 focus:outline-none focus:ring focus:ring-violet-950 w-[100%] h-[100px] "
        />
      </div>
      <div className="py-3 text-xl">
        <label>Precio</label>
        <input
          name="price"
          value={product.price}
          onChange={handleValueChange}
          type="number"
          className="mx-3 px-4 py-1 rounded-xl focus:bg-violet-200 focus:outline-none focus:ring focus:ring-violet-950"
        />
      </div>
      <div className="py-3 text-xl">
        <label>Seleccione las imagenes:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="bg-violet-300 mx-3 px-4 py-1 rounded-xl focus:bg-violet-200 focus:outline-none focus:ring focus:ring-violet-950"
        />
      </div>
      {product.images[0] && (
        <div className="bg-white p-3 w-80">
          <img
            className="h-150"
            src={URL.createObjectURL(product.images[0])}
            alt="image"
          />
        </div>
      )}
      <div className="py-3 text-xl">
        <label>Existencias: </label>
        <input
          name="stock"
          value={product.stock}
          onChange={handleValueChange}
          type="number"
          className="mx-3 px-4 py-1 rounded-xl focus:bg-violet-200 focus:outline-none focus:ring focus:ring-violet-950"
        />
      </div>
      <div className="flex justify-center py-5 text-xl text-white gap-2">
        <Link className="tz-btn tz-btn-secondary" href={"/admin/products"}>
          Volver
        </Link>
        <button className="tz-btn tz-btn-primary" onClick={putProduct}>
          Modificar Producto
        </button>
      </div>
    </div>
  );
};

export default ProductFormUpdate;
