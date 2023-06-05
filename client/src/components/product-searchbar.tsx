import React from "react";
import { useState } from "react";
import ProductInterface from '../interfaces/productsInterface';
import { getSearchs } from "@/store/actionCreators/getSearch";
import { useDispatch } from "react-redux";
import { useRouter } from 'next/navigation';


type Props = {
    arrayProducts: ProductInterface[];
  };

const Searchbar = ({ arrayProducts }: Props) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [search, SetSearch] = useState("");
    let result: ProductInterface[] = [];
    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;
        SetSearch(value);
    }
    const handleClick = async () => {
        router.push('/products');
         arrayProducts.forEach((product) => {
            if (product.name === search || product.name.includes(search)){
                result.push(product);
            }
        })
       await dispatch(getSearchs(result));
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
            <button className="ml-5" onClick={()=>handleClick()}>Search</button>
        </div>
    )
}
export default Searchbar;