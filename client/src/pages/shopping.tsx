import React, { ReactElement, useEffect, useState } from "react";
import Image from "next/image";
import data from "../data.json";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
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
import { NextPageWithLayout } from "@/pages/_app";
import MainLayout from "@/layout/main-layout";

const stripe = loadStripe(`${process.env.PUBLIC_APIKEY}`);

const Shopping: NextPageWithLayout = () => {
  const [cart, setCart] = useState<ShoppingCartInterface[] | any[]>([]);

  const dispatch = useDispatch();

  const { UserFromDb } = useTypedSelector((state) => state.user);
  const { CartItems } = useTypedSelector((state) => state.cart);
  

  const { user } = useUser();

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
    if (quantity <= 0) {
      alert("La cantidad debe ser mayor a 0");
      return;
    }
    if (UserFromDb.name !== undefined) {
      try {
        const itemFindCart = CartItems.products?.find(
          (item: any) => item.id === id
        );

        if (
          itemFindCart?.stock !== undefined &&
          itemFindCart.stock < quantity
        ) {
          alert("No hay stock suficiente");
          return;
        }

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
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const index = cart.find((item: any) => item.product.id === Number(id));
      if (index.product.stock !== undefined && index.product.stock < quantity) {
        alert("No hay stock suficiente");
        return;
      }

      modifyCart(id, quantity);
      setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
    }
  };
  console.log(CartItems);
  
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
    console.log(user);
  }, []);
  




  return (
    <div className="flex justify-center content-center">
      <div className="flex flex-col w-3/4 gap-4 py-4">
        {UserFromDb.name !== undefined ? (
          CartItems.products?.length > 0 ? (
            CartItems.products?.map((item: any) => (
              <div
                key={item.id}
                className="flex justify-between bg-violet-300 h-44 rounded-md"
              >
                <div className="flex p-2">
                  <div
                    className="w-40 h-40 flex justify-center items-center"
                    style={{
                      minWidth: "150px",
                      maxWidth: "150px",
                      maxHeight: "150px",
                    }}
                  >
                    <Image
                      src={item.images[0] ? item.images[1] : ""}
                      alt={item.name || ""}
                      width={150}
                      height={150}
                      style={{ maxHeight: "150px" }}
                    />
                  </div>
                  <div className="pl-2">
                    <p className="font-bold">{item.name}</p>
                    <p>{item.brand}</p>
                    <p className="text-violet-950 font-bold text-2xl">
                      ${item.price}
                    </p>
                    <p>{item.stock}</p>
                  </div>
                </div>

                <div
                  className="flex justify-center gap-4 content-center items-center w-36"
                  style={{ minWidth: "150px" }}
                >
                  <input
                    type="text"
                    placeholder="1"
                    className="h-10 rounded-md w-10 text-center"
                    value={item.quantity}
                    onChange={(e) =>
                      ManageModifyCart(item.id, Number(e.target.value))
                    }
                  />
                  <svg
                    onClick={() => ManageRemoveCart(item.id)}
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-trash bg-violet-600 w-14 h-10 rounded-lg"
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
              <div className="flex p-2">
                <div
                  className="w-40 h-40 flex justify-center items-center"
                  style={{
                    minWidth: "150px",
                    maxWidth: "150px",
                    maxHeight: "150px",
                  }}
                >
                  <Image
                    src={item.product?.images[0] ? item.product.images[0] : ""}
                    alt={item.product?.name || ""}
                    width={150}
                    height={150}
                    style={{ maxHeight: "150px" }}
                  />
                </div>
                <div className="pl-2">
                  <p className="font-bold">{item.product?.name}</p>
                  <p>{item.product?.brand}</p>
                  <p className="text-violet-950 font-bold text-2xl">
                    {item.product?.price}
                  </p>
                  <p>{item.product?.stock}</p>
                </div>
              </div>
              <div
                className="flex justify-center gap-4 content-center items-center w-36"
                style={{ minWidth: "150px" }}
              >
                <input
                  type="text"
                  placeholder="1"
                  className="h-10 rounded-md w-10 text-center"
                  value={item.quantity}
                  onChange={(e) =>
                    ManageModifyCart(item.product?.id, Number(e.target.value))
                  }
                />
                <svg
                  onClick={() => ManageRemoveCart(item.product?.id)}
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-trash bg-violet-600 w-14 h-10 rounded-lg"
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
        {user !== undefined ? (
          user.email_verified !== null ? (
            user.email_verified !== undefined ? (
              user.email_verified ? (
                UserFromDb.name !== undefined ? (
                  CartItems.products?.length > 0 ? (
                    <Elements stripe={stripe}>
                      <CheckoutForm state={CartItems} />
                    </Elements>
                  ) : null
                ) : (
                  <button className="bg-violet-600 text-white py-2 px-4 rounded mt-4 w-full">
                    Logueate y completa tus datos para continuar la compra
                  </button>
                )
              ) : (
                <button className="bg-violet-600 text-white py-2 px-4 rounded mt-4 w-full">
                  Logueate y completa tus datos para continuar la compra
                </button>
              )
            ) : (
              <button className="bg-violet-600 text-white py-2 px-4 rounded mt-4 w-full">
                Logueate y completa tus datos para continuar la compra
              </button>
            )
          ) : (
            <button className="bg-violet-600 text-white py-2 px-4 rounded mt-4 w-full">
              Logueate y completa tus datos para continuar la compra
            </button>
          )
        ) : cart.length > 0 ? (
          <button className="bg-violet-600 text-white py-2 px-4 rounded mt-4 w-full">
            Logueate y completa tus datos para continuar la compra
          </button>
        ) : null}
      </div>
//este elements de abajo nose si va o no fijense!
      <Elements stripe={stripe}>
        <CheckoutForm state={CartItems} />
      </Elements>
      
       
      

    </div>
  );
};
Shopping.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default Shopping;

// export default withPageAuthRequired(Shopping);
