import React from "react";
import { useState } from "react";
import ProductInterface from '../interfaces/productsInterface';

type Props = {
    arrayProducts: ProductInterface[];
  };

const Searchbar = ({ arrayProducts }: Props) => {

    const [search, SetSearch] = useState("");
    
    const searchByName = (name: string) => {
        arrayProducts.forEach((product) => {
            if (product.name === name) {
                alert(`El producto ${product.name} si se encuentra disponible`);
            }
        })
    }
    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;
        SetSearch(value);
    }
    const handleClick = () => {
        searchByName(search)
    }
    return (
        <div className="grow mx-4 flex">
            <input
                type="search"
                className="w-full rounded-full px-4 py-2 text-sm placeholder:text-zinc-400 border
           focus:outline-none focus:border-teal-500"
                placeholder="Search"
                onChange={handleChange}
            />
            <button className="ml-5" onClick={handleClick}>Search</button>
        </div>
    )
}
export default Searchbar;