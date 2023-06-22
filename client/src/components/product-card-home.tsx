import React from "react";
import ProductInterface from "@/interfaces/productsInterface";
import Image from "next/image";
import Link from "next/link";
import { manageCart } from "@/utils/localStorageUtils";
import axios from "axios";
import { formatDataForLocal } from "@/utils/formatDataUtils";
import { ActionType } from "@/store/actionTypes";
import { useTypedSelector } from "@/store/useTypeSelector";
import { useDispatch } from "react-redux";

const ProductCardHome = ({
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
    <div className=" flex flex-col justify-around items-center bg-violet-400 shadow-2xl shadow-gray-700 rounded-xl m-8 py-5 px-5 h-500 hover:bg-violet-500 hover:scale-110 duration-300">
      <Link href={`detail/${id}`}>
        <div className="flex flex-col items-center p-2 rounded-xl">
          <Image
            className="bg-white rounded-xl"
            src={images[0]}
            alt={name}
            width={125}
            height={125}
          />
        </div>
        <div className="flex flex-col justify-between w-80 h-70">
          <h2 className="font-bold">{name}</h2>
          <h2 className="text-violet-950 font-bold">${price}</h2>
          <h2>{category}</h2>
        </div>
      </Link>
      <button
        onClick={() => handleCartPostItems()}
        className="bg-violet-900 rounded-xl py-1 px-2 text-white hover:bg-violet-700 duration-300 mt-2"
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default ProductCardHome;
