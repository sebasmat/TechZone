import React, { useState } from "react";
import ProductInterface from "@/interfaces/productsInterface";
import Image from "next/image";
import Link from "next/link";
import { manageCart } from "@/utils/localStorageUtils";
import { useTypedSelector } from "@/store/useTypeSelector";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ActionType } from "@/store/actionTypes";
import { formatDataForLocal } from "@/utils/formatDataUtils";
import { useRouter } from "next/router";

const ProductCard = ({
  id,
  category,
  brand,
  name,
  images,
  description,
  price,
  avalaible,
  stock,
}: ProductInterface) => {
  const router = useRouter()


  const { UserFromDb } = useTypedSelector((state) => state.user);
  const { CartItems } = useTypedSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleCartPostItems = async () => {
    try {
      if (UserFromDb.name !== undefined) {
        const findInCart = CartItems.products.findIndex(
          (item: any) => item.id === id
        );

        if (findInCart === -1) {
          const { data } = await axios.post("http://localhost:3001/cart/item", {
            cartItem: {
              userId: UserFromDb.id,
              productId: id,
              quantity: 1,
            },
          });

          const formatData = formatDataForLocal(data);

          dispatch({
            type: ActionType.GET_CART_ITEMS,
            payload: formatData,
          });
          alert("Producto añadido al carrito");
        } else {
          alert("Producto ya en carrito");
        }
      } else {
        // find product in local storage
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        const index = cart.findIndex((item: any) => item.product?.id === id);
        if (index === -1) {
          manageCart({
            id,
            category,
            brand,
            name,
            images,
            description,
            price,
            avalaible,
            stock,
          });
          alert("Producto añadido al carrito");
        } else {
          alert("Producto ya en carrito");
        }
      }
    } catch (error: any) {
      console.log(error);
      dispatch({
        type: ActionType.GET_CART_ITEMS_ERROR,
        payload: error.message,
      });
    }
  };

  return (
    <div className="flex flex-row  rounded-2xl m-7 p-5 bg-violet-400 shadow-2xl shadow-gray-700 hover:bg-violet-500 duration-300">
      <Link href={`detail/${id}`}>
        <Image
          src={images[0]}
          alt={name}
          width={200}
          height={200}
          className="bg-white rounded-2xl"
          style={{
            maxHeight: "200px",
            maxWidth: "200px",
            minHeight: "200px",
            minWidth: "200px",
          }}
        />
      </Link>
      <div className="flex flex-col items-start justify-between pl-20 w-[100%] ">
        <Link href={`detail/${id}`}>
          <h2 className="font-bold text-xl">{name}</h2>
          <h2>{category}</h2>
          <h2 className="text-violet-950 font-bold text-2xl">${price}</h2>
        </Link>
        <div className="flex w-[100%] justify-end">
          {router.asPath == "/profilePage" ?
            <Link href={`/reviewAndScore/${id}`}>
              <button>Calificar</button>
            </Link> :
            <button
              onClick={() => handleCartPostItems()}
              className="bg-violet-900 rounded-xl py-1 px-2 text-white hover:bg-violet-700 duration-300 mt-2 "
            >
              Agregar al carrito
            </button>}
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
