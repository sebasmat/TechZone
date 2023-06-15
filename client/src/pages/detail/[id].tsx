import style from "../../styles/detail.module.css";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDetails } from "@/store/actionCreators/getDetails";
import { useTypedSelector } from "@/store/useTypeSelector";
import { deleteProduct } from "@/store/actionCreators/deleteProduct";

const detail = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();

  const result = useTypedSelector((state) => state.product.detail);

  useEffect(() => {
    if (id !== undefined) {
      dispatch(getDetails(Number(id)));
      // console.log(result[0]?.images[0] +"holaaa")
    }
    return () => dispatch(deleteProduct());
  }, [dispatch, id]);

  //habria que hacer una action para buscar el producto por id de la bdd, guardarlo un la store y traerlo aca.
  //tambien hay que hacer una action para borrar el estado global de details y no se renderice algo que no queremos al cambiar de card

  return (
    <main>
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
              <button className={style.button}>añadir al carro</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default detail;
