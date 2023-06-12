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
    const handleDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
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
            let url:string = ""
            if (productImage1) {
                try {
                    const formData = new FormData();
                    formData.append('image', productImage1);

                    const response = await axios.post(
                        'https://api.imgbb.com/1/upload?key=758d8e88350fb07971042e791dca970b',
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
        <div>
            <div>
                <h1>Crea un producto</h1>
            </div>
            <div>
                <label>Nombre: </label>
                <input value={productName} onChange={handleNameValue} type="text" />
            </div>
            <div>
                <label>Marca: </label>
                <input value={productBrand} onChange={handleBrandValue} type="text" />
            </div>
            <div>
                <label>Categoría</label>
                <select className="bg-white rounded-xl font-semibold hover:bg-violet-200"
                    onChange={handleCategory}>
                        <option></option>
                    {categories.map((category) => {
                        return (<option value={category.category}>{category.category}</option>)
                    })}
                </select>
            </div>
            <div>
                <label>Descripción: </label>
                <input value={productDescription} onChange={handleDescription} type="text" />
            </div>
            <div>
                <label>Precio</label>
                <input value={productPrice} onChange={handlePrice} type="number" />
            </div>
            <div>
                <label>Seleccione las imagenes:</label>
                <input type="file" accept="image/*" onChange={handleImages} />
            </div>
            {productImage1 && <img src={URL.createObjectURL(productImage1)} />}
            <div>
                <label>Existencias: </label>
                <input value={productStock} onChange={handleStock} type="number" />
            </div>

            <button onClick={postProduct}>Crear Producto</button>
        </div>
    )
};


export default ProductForm;