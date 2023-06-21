import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "@/store/actionCreators/getUser";
import { useTypedSelector } from "@/store/useTypeSelector";
import { useRouter } from "next/router";
import axios from "axios";
import { ActionType } from "@/store/actionTypes";
import { formatDataForFavorites, formatDataForLocal } from "@/utils/formatDataUtils";
import { removeCart } from "@/utils/localStorageUtils";
import ProfileModal from "./profile-modal";

type Props = {};

const LoginLogout = ({}: Props) => {
  const { error, isLoading, user } = useUser();
  const { Error, UserFromDb } = useTypedSelector((state) => state.user);
  const { CartItems } = useTypedSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState<boolean>(false);
  const { FavItems} = useTypedSelector((state) => state.favorites)

  const router = useRouter();

  useEffect(() => {
    if (user !== undefined && error === undefined) {
      dispatch(getUser(user.email || ""));
    }
  }, [user]);

  useEffect(() => {
    if (Error !== undefined) {
      router.push("/user");
    }
  }, [Error]);

  const openModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    showModal ? setShowModal(false) : setShowModal(true);
  };

  const closeModal = (event: React.MouseEvent<HTMLDivElement>) => {
    setShowModal(false);
  };

  const handleCartPostItems = async () => {
    try {
      const localData = JSON.parse(localStorage.getItem("cart") || "[]");
      const formatDataForApi: [] = localData.map((item: any) => {
        return {
          userId: UserFromDb.id,
          productId: item.product.id,
          quantity: item.quantity,
        };
      });

      const { data } = await axios.post("http://localhost:3001/cart/items", {
        cartItems: formatDataForApi,
      });

      const formatData = formatDataForLocal(data);
      localStorage.removeItem("cart");

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
  };

  const handleFavPostItems = async (producto: []) => {
    try {
      const formatDataForApi: {} = producto.map((item: any) => {
        return {
          userId: UserFromDb.id,
          productId: item.product.id,
        };
      });
      const { data } = await axios.post("http://localhost:3001/cart/items", {
        cartItems: formatDataForApi,
      });
      dispatch({
        type: ActionType.GET_FAV_ITEMS,
        payload: formatDataForApi,
      });
    } catch (error: any) {
      console.log(error);
      dispatch({
        type: ActionType.GET_FAV_ITEMS_ERROR,
        payload: error.message,
      });
    }
  };


  const handleGetCartItems = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/cart/items/${UserFromDb.id}`
      );
      const formatData = formatDataForLocal(data);
      dispatch({
        type: ActionType.GET_CART_ITEMS,
        payload: formatData,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_CART_ITEMS_ERROR,
        payload: error.message,
      });
    }
  };

  const handleGetFavItems = async () =>{
    try {
      const {data} = await axios.get(
        `http://localhost:3001/favorites/items/${UserFromDb.id}`
      );
      const formatDataFav = formatDataForFavorites(data)
      dispatch({
        type: ActionType.GET_FAV_ITEMS,
        payload: formatDataFav,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_FAV_ITEMS_ERROR,
        payload: error.message,
      })
      
    }
  };

  const handleFavDelete = async (id:number | undefined) => {
    if ( UserFromDb.name ! == undefined){
      try {
        const deleteOk = await axios.delete(
          `http://localhost:3001/favorites/item/${UserFromDb.id}/${id}`
        );
        if (deleteOk.status ===200) {
          const {data } = await axios.get (
            `http://localhost:3001/favorites/item/${UserFromDb.id}`
          );
          const FormatData = formatDataForFavorites(data);
          dispatch({
            type: ActionType.GET_FAV_ITEMS,
            payload: FormatData
          });
        }
      } catch (error: any) {
        console.log(error);
        dispatch({
          type: ActionType.GET_FAV_ITEMS_ERROR,
          payload: error.message,
        })
      }
    }
  }

  useEffect(() => {
    if (UserFromDb.name !== undefined) {
      handleGetCartItems();
      handleGetFavItems();
      if (JSON.parse(localStorage.getItem("cart") || "[]").length > 0) {
        handleCartPostItems();
      }
    }
  }, [UserFromDb]);

  if (error) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <Fragment>
      <div>
        {!user && (
          <button onClick={openModal}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="ml-4  w-10 h-10"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </button>
        )}

        {user && (
          <button onClick={openModal}>
            <img
              className=" rounded-full ml-4 h-10 w-10"
              src={UserFromDb.profileIMG}
              alt=""
            />
          </button>
        )}
      </div>
      <ProfileModal closeModal={closeModal} showModal={showModal} />
    </Fragment>
  );
};

export default LoginLogout;
