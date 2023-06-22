import style from "../../styles/detail.module.css";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getDetails } from "@/store/actionCreators/getDetails";
import { useTypedSelector } from "@/store/useTypeSelector";
import { deleteProduct } from "@/store/actionCreators/deleteProduct";
import axios from "axios";
import { formatDataForLocal } from "@/utils/formatDataUtils";
import { ActionType } from "@/store/actionTypes";
import { manageCart } from "@/utils/localStorageUtils";
import ReviewsComponent from "@/components/reviewsComponent";
import { NextPageWithLayout } from "../_app";
import MainLayout from "@/layout/main-layout";


const Detail:NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();

  const result = useTypedSelector((state) => state.product.detail);
  const { UserFromDb } = useTypedSelector((state) => state.user);
  const { CartItems } = useTypedSelector((state) => state.cart);
  const [idProduct, setIdProduct] = useState("")
  const [reviewsFromDb, setReviewFromDb] = useState<reviewInterface[] | any>([])

  const findReview = async (id:string | string[]) => {
    try {
      const review = await axios.get(`http://localhost:3001/review/products/${id}`)
        .then((data) => setReviewFromDb(data.data))
    } catch (error) {
      setReviewFromDb([])
    }

  }


  const handleCartPostItems = async () => {
    try {
      if (UserFromDb.name !== undefined) {
        const findInCart = CartItems.products.findIndex(
          (item: any) => item.id === Number(id)
        );

        if (findInCart === -1) {
          const { data } = await axios.post("http://localhost:3001/cart/item", {
            cartItem: {
              userId: UserFromDb.id,
              productId: Number(id),
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
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        const index = cart.findIndex(
          (item: any) => item.product.id === Number(id)
        );
        if (index === -1) {
          manageCart({
            id: result[0]?.id,
            category: result[0]?.category,
            brand: result[0]?.brand,
            name: result[0]?.name,
            images: result[0]?.images,
            description: result[0]?.description,
            price: result[0]?.price,
            avalaible: result[0]?.avalaible,
            stock: result[0]?.stock,
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


  useEffect(() => {
    if (id !== undefined) {
      dispatch(getDetails(Number(id)));
      findReview(id)
      // console.log(result[0]?.images[0] +"holaaa")
    }
    return () => dispatch(deleteProduct());
  }, [dispatch, id]);


  //habria que hacer una action para buscar el producto por id de la bdd, guardarlo un la store y traerlo aca.
  //tambien hay que hacer una action para borrar el estado global de details y no se renderice algo que no queremos al cambiar de card

  return (
    <div>
      <div className={style.backround}>
        <div className={style.container}>
          <div>
            <img src={result[0]?.images[1]} className={style.img}></img>
          </div>
          <div className={style.details}>
            <h1 className="font-bold mt-10 text-4xl">{result[0]?.name}</h1>
            <br />
            <p className="my-10">{result[0]?.description}</p>
            <div className="flex flex-col flex-around">
              <h3 className="font-bold text-xl">
                Categoria: {result[0]?.category}
              </h3>
              <h3 className="font-bold text-xl">Marca:{result[0]?.brand}</h3>
              <h3 className="font-bold text-3xl text-violet-900 p-5 ">
                Precio:${result[0]?.price}
              </h3>
              <button
                className={style.button}
                onClick={() => handleCartPostItems()}
              >
                añadir al carro
              </button>
              <div>
                <ReviewsComponent reviewsFromDb={reviewsFromDb} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
Detail.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Detail;
