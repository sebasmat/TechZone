import axios from "axios";
import { useTypedSelector } from "@/store/useTypeSelector";
import { ReactElement, useEffect } from "react";
import { NextPageWithLayout } from "./_app";
import MainLayout from "@/layout/main-layout";
import { ActionType } from "@/store/actionTypes";
import { useDispatch } from "react-redux";
import ShoppingCartInterface from "@/interfaces/shoppingCartInterface";

const Succes: NextPageWithLayout = () => {
  const { UserFromDb } = useTypedSelector((state) => state.user);
  const { CartItems } = useTypedSelector((state) => state.cart);

  const dispatch = useDispatch();

  const mail = async () => {
    localStorage.setItem("cartSuccess", JSON.stringify(CartItems));

    const user: any = [];
    const productos: any = [];
    user.push({
      id: UserFromDb.id,
      email: UserFromDb.email,
      name: UserFromDb.name,
      direccion: UserFromDb.direction,
    });
    CartItems.products.map((item: any) => {
      productos.push({
        name: item.name,
        cantidad: item.quantity,
        price: item.price,
        image: item.images[0],
      });
    });
    const request = await axios.post(
      "https://tech-zone-api-n786.onrender.com/sales",
      {
        //esta ruta me CREA el registro de la venta, relacionadando el usuario y los productos que compro
        user: user,
        product: CartItems.products, //OJO, para crear efectivamente la venta toca mandarle todos los campos del producto, por eso lo mando desde CartItem.products
      }
    );

    const updateStock = await axios.put(
      "https://tech-zone-api-n786.onrender.com/stock",
      {
        products: CartItems.products,
      }
    ); //esta ruta actualiza el stock

    const getSales = await axios.get(
      "https://tech-zone-api-n786.onrender.com/sales"
    ); // esta ruta me TRAE todas las ventas realizadas

    const getSalesByUser = await axios.get(
      "https://tech-zone-api-n786.onrender.com/sales/" + user[0].id
    ); //esta ruta me TRAE todas las compras que un usuario realizo, añadir el ID del usuario

    const { data } = await axios.post(
      "https://tech-zone-api-n786.onrender.com/confirmacion",
      {
        user,
        productos,
      }
    );

    window.location.href = data.url;
  };

  const ManageRemoveCart = async () => {
    try {
      const getTemporalCart = JSON.parse(
        localStorage.getItem("cartSuccess") || "[]"
      ) as ShoppingCartInterface;

      await Promise.all(
        getTemporalCart.products.map(async (product) => {
          await axios.delete(
            `https://tech-zone-api-n786.onrender.com/cart/item/${getTemporalCart.user.id}/${product.id}`
          );
        })
      );
      localStorage.removeItem("cartSuccess");
      dispatch({
        type: ActionType.GET_CART_ITEMS_ERROR,
        payload: "Se han eliminado los productos de su carrito",
      });
    } catch (error: any) {
      console.log(error);
      dispatch({
        type: ActionType.GET_CART_ITEMS_ERROR,
        payload: error.message,
      });
    }
  };

  useEffect(() => {
    if (CartItems.products.length > 0) {
      mail();
    }
  }, [CartItems]);

  useEffect(() => {
    return () => {
      ManageRemoveCart();
    };
  }, []);
  return (
    <div>
      <h1>HOLA</h1>
      <h1>Felicidades por su compra</h1>
      <h3>{UserFromDb?.name}</h3>
      <h3>{UserFromDb?.direction}</h3>
      <div>
        {CartItems.products?.length > 0 ? (
          CartItems.products?.map((item: any) => (
            <div>
              <div className="pl-2">
                <p className="font-bold">{item.name}</p>
                <p>{item.brand}</p>
                <p className="text-violet-950 font-bold text-2xl">
                  ${item.price}
                </p>
                <p>cant:{item.quantity}</p>
              </div>
            </div>
          ))
        ) : (
          <h1>no se encontraron productos</h1>
        )}
      </div>
    </div>
  );
};
Succes.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default Succes;
