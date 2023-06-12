import React, { use, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import categoriesInterface from "@/interfaces/categoriesInterface";


const ProductForm = () => {

    const [productName, setProductName] = useState<string>("")
    const [productBrand, setProductBrand] = useState<string>("")
    const [productCategory, setProductCategory] = useState<string>("")
    const [productDescription, setProductDescription] = useState<string>("")
    const [productPrice, setProductPrice] = useState<number>(0)
    const [productImage1, setProductImage1] = useState<File | null>(null)
    const [productStock, setProductStock] = useState<number>(0)
    const [categories, setCategories] = useState<categoriesInterface[]>([])


    const result = async () => {
        await fetch('http://localhost:3001/categories')
            .then((response) => response.json())
            .then((data) => setCategories(data))
    }

    useEffect(() => {
        result()
    }, [])

    const handleNameValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProductName(event.currentTarget.value)
    }
    const handleBrandValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProductBrand(event.currentTarget.value)
    }
    const handleCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setProductCategory(event.currentTarget.value)
    }
    const handleDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setProductDescription(event.currentTarget.value)
    }
    const handlePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        const price: number = parseFloat(event.currentTarget.value)
        setProductPrice(price)
    }
    const handleStock = (event: React.ChangeEvent<HTMLInputElement>) => {
        const stock: number = parseInt(event.currentTarget.value)
        setProductStock(stock)
    }

    const handleImages = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const image = event.target.files[0];
            if (image) setProductImage1(image)
        }
    };

    const postProduct = async (event: React.MouseEvent<HTMLButtonElement>) => {
        if (productBrand && productBrand && productCategory && productDescription && productName && productImage1 && productPrice && productStock) {
            let url: string = ""
            if (productImage1) {
                try {
                    const formData = new FormData();
                    formData.append('image', productImage1);

                    const response = await axios.post(
                        'https://api.imgbb.com/1/upload?key=49a1b0e207191c858c5ee634e59c96bc',
                        formData
                    );
                    url = response.data.data.display_url;
                    console.log(url)
                } catch (error) {
                    alert('No fue posible crear el producto, por favor inténtelo más tarde');
                    return;
                }
            }
            axios.post("http://localhost:3001/create", {
                name: productName,
                brand: productBrand,
                category: productCategory,
                images: [url, url],
                description: productDescription,
                price: productPrice,
                avalaible: true,
                stock: productStock
            })
                .then(() => alert("El producto fue creado con exito"))
                .then(() => {
                    setProductCategory("");
                    setProductName("");
                    setProductBrand("");
                    setProductImage1(null)
                    setProductPrice(0)
                    setProductStock(0)
                    setProductCategory("")
                    setProductDescription("")
                })
                .catch((error) => console.log(error))
        } else {
            alert("No es posilble crear el producto si no están llenos todos los datos")
        }
    }

    return (
        <div className="bg-violet-100 p-10 rounded-xl drop-shadow-2xl shadow-violet-950 ">
            <div className="flex justify-center py-10 text-4xl text-violet-950 ">
                <h1>Crea un producto</h1>
            </div>
            <div className="py-3 text-xl" >
                <label>Nombre: </label>
                <input value={productName} onChange={handleNameValue} type="text" className="mx-3 px-4 py-1 rounded-xl focus:bg-violet-200 focus:outline-none focus:ring focus:ring-violet-950" />
            </div>
            <div className="py-3 text-xl">
                <label>Marca: </label>
                <input value={productBrand} onChange={handleBrandValue} type="text" className="mx-3 px-4 py-1 rounded-xl focus:bg-violet-200 focus:outline-none focus:ring focus:ring-violet-950" />
            </div>
            <div className="py-3 text-xl">
                <label>Categoría</label>
                <select className="mx-3 px-4 bg-white py-1 rounded-xl focus:bg-violet-200 focus:outline-none focus:ring focus:ring-violet-950"
                    onChange={handleCategory}>
                    <option></option>
                    {categories.map((category) => {
                        return (<option value={category.category}>{category.category}</option>)
                    })}
                </select>
            </div>
            <div className="py-3 text-xl">
                <label>Descripción: </label>
                <textarea value={productDescription} onChange={handleDescription} className="mx-3 mt-5 px-4 py-1 rounded-xl focus:bg-violet-200 focus:outline-none focus:ring focus:ring-violet-950 w-[100%] h-[100px] " />
            </div>
            <div className="py-3 text-xl">
                <label>Precio</label>
                <input value={productPrice} onChange={handlePrice} type="number" className="mx-3 px-4 py-1 rounded-xl focus:bg-violet-200 focus:outline-none focus:ring focus:ring-violet-950" />
            </div>
            <div className="py-3 text-xl">
                <label>Seleccione las imagenes:</label>
                <input type="file" accept="image/*" onChange={handleImages} className="bg-violet-300 mx-3 px-4 py-1 rounded-xl focus:bg-violet-200 focus:outline-none focus:ring focus:ring-violet-950" />
            </div>
            {productImage1 && <div className="bg-white p-3 w-80">
                <img className="h-150" src={URL.createObjectURL(productImage1)} />
            </div>}
            <div className="py-3 text-xl">
                <label>Existencias: </label>
                <input value={productStock} onChange={handleStock} type="number" className="mx-3 px-4 py-1 rounded-xl focus:bg-violet-200 focus:outline-none focus:ring focus:ring-violet-950" />
            </div>
            <div className="flex justify-center py-5 text-xl text-white">
                <button className="bg-violet-900 rounded-xl px-3 py-2 hover:bg-violet-300 hover:text-violet-900 duration-150" onClick={postProduct}>Crear Producto</button>
            </div>
        </div>
    )
};


export default ProductForm;