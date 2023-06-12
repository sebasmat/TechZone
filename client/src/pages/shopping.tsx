import React, { useEffect, useState } from "react";
import Image from "next/image";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import ShoppingCartInterface from "@/interfaces/shoppingCartInterface";
import { modifyCart, removeCart } from "@/utils/localStorageUtils";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/CheckoutForm";

const stripe = loadStripe(`${process.env.PUBLIC_APIKEY}`);

// div page-container
//   div products-container
//     div product

const Shopping = () => {
  const [cart, setCart] = useState<ShoppingCartInterface[]>([]);

  const ManageRemoveCart = (id: number | undefined) => {
    removeCart(id);
    setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
  };

  const ManageModifyCart = (id: number | undefined, quantity: number) => {
    modifyCart(id, quantity);
    setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
  };

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, []);
  console.log(cart);


  return (
    // page container
    <div className="flex justify-center content-center">
      {/*cart container*/}
      <div className="flex flex-col bg-teal-100">
        {/*product*/}
        {cart.map((item) => (
          <div key={item.product?.id} className="flex">
            {/*image*/}
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
        ))}
      </div>
      <Elements stripe={stripe} >
        <CheckoutForm state={cart} />
      </Elements>
    </div>
  );
};

export default withPageAuthRequired(Shopping);
