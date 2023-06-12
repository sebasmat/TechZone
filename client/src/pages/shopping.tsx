import React, { useEffect, useState } from "react";
import Image from "next/image";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import ShoppingCartInterface from "@/interfaces/shoppingCartInterface";
import { modifyCart, removeCart } from "@/utils/localStorageUtils";
import { useTypedSelector } from "@/store/useTypeSelector";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ActionType } from "@/store/actionTypes";
import { formatDataForLocal } from "@/utils/formatDataUtils";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/CheckoutForm";


const stripe = loadStripe(`${process.env.PUBLIC_APIKEY}`);

const Shopping = () => {
  const [cart, setCart] = useState<ShoppingCartInterface[] | any[]>([]);

  const dispatch = useDispatch();

  const { UserFromDb } = useTypedSelector((state) => state.user);
  const { CartItems } = useTypedSelector((state) => state.cart);

  const ManageRemoveCart = async (id: number | undefined) => {
    if (UserFromDb.name !== undefined) {
      try {
        const deleteOk = await axios.delete(
          `http://localhost:3001/cart/item/${UserFromDb.id}/${id}`
        );
        if (deleteOk.status === 200) {
          const { data } = await axios.get(
            `http://localhost:3001/cart/items/${UserFromDb.id}`
          );
          const formatData = formatDataForLocal(data);

          dispatch({
            type: ActionType.GET_CART_ITEMS,
            payload: formatData,
          });
        }
      } catch (error: any) {
        console.log(error);
        dispatch({
          type: ActionType.GET_CART_ITEMS_ERROR,
          payload: error.message,
        });
      }
    } else {
      removeCart(id);
      setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
    }
  };

  const ManageModifyCart = async (id: number | undefined, quantity: number) => {
    if (UserFromDb.name !== undefined) {
      try {
        const { data } = await axios.put(`http://localhost:3001/cart/item`, {
          userId: UserFromDb.id,
          productId: id,
          quantity: quantity,
        });

        const formatData = formatDataForLocal(data);

        dispatch({
          type: ActionType.GET_CART_ITEMS,
          payload: formatData,
        });
      } catch (error: any) {
        console.log(error);
        dispatch({
          type: ActionType.GET_CART_ITEMS_ERROR,
          payload: error.message,
        });
      }
    } else {
      modifyCart(id, quantity);
      setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
    }
  };

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, []);


  return (
    <div className="flex justify-center content-center">
      <div className="flex flex-col bg-teal-100">
        {UserFromDb.name !== undefined ? (
          CartItems.products?.length > 0 ? (
            CartItems.products?.map((item: any) => (
              <div key={item.id} className="flex">
                <div>
                  <Image
                    src={item.images[0] ? item.images[0] : ""}
                    alt={item.name || ""}
                    width={150}
                    height={150}
                  />
                </div>
                <div>
                  <p>{item.name}</p>
                  <p>{item.brand}</p>
                  <p>{item.price}</p>
                </div>
                <div className="flex justify-center content-center items-center">
                  <input
                    type="text"
                    placeholder="1"
                    className="h-10"
                    value={item.quantity}
                    onChange={(e) =>
                      ManageModifyCart(item.id, Number(e.target.value))
                    }
                  />
                  <svg
                    onClick={() => ManageRemoveCart(item.id)}
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-trash"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 7l16 0"></path>
                    <path d="M10 11l0 6"></path>
                    <path d="M14 11l0 6"></path>
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                  </svg>
                </div>
              </div>
            ))
          ) : (
            <p>No hay productos</p>
          )
        ) : cart.length > 0 ? (
          cart.map((item: any) => (
            <div key={item.product?.id} className="flex">
              <div>
                <Image
                  src={item.product?.images[0] ? item.product.images[0] : ""}
                  alt={item.product?.name || ""}
                  width={150}
                  height={150}
                />
              </div>
              <div>
                <p>{item.product?.name}</p>
                <p>{item.product?.brand}</p>
                <p>{item.product?.price}</p>
              </div>
              <div className="flex justify-center content-center items-center">
                <input
                  type="text"
                  placeholder="1"
                  className="h-10"
                  value={item.quantity}
                  onChange={(e) =>
                    ManageModifyCart(item.product?.id, Number(e.target.value))
                  }
                />
                <svg
                  onClick={() => ManageRemoveCart(item.product?.id)}
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-trash"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 7l16 0"></path>
                  <path d="M10 11l0 6"></path>
                  <path d="M14 11l0 6"></path>
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                </svg>
              </div>
            </div>
          ))
        ) : (
          <p>No hay productos</p>
        )}
      </div>
      <Elements stripe={stripe} >
        <CheckoutForm state={CartItems} />
      </Elements>
    </div>
  );
};

export default withPageAuthRequired(Shopping);
