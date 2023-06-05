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
            <svg
                onClick={handleClick}
                xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="pl-2 w-11 h-11 stroke-2 cursor-pointer ">
                <path strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M21 21l-5.197-5.197m0 
                0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
        </div>
    )
}
export default Searchbar;