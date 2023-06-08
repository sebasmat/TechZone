import axios from "axios";
import { Dispatch } from "redux";
import { ActionType, Action } from "../actionTypes";
// desde la bdd viene el id como number, y las imagenes en array las dos "images".
//habria que modificar la interface, aca el id :number.
//en store.ts chequear el de product.
//en la interface de detail creo que deberia ir detailReducerInterface y exportar eso
//y en reducers index en vez de product interface el creado arriba(detailReducerInterface)
export const getDetails = (id: number) => {
  return async (dispatch: Dispatch<Action>) => {
    console.log(id)
    const { data } = await axios.get(`http://localhost:3001/products/${id}`);
    console.log(data)

    // try {
      dispatch({
        type: ActionType.GET_DETAILS,
        payload: [data],
      });
    // }catch (err: any) {
    //   dispatch({
    //     type: ActionType.GET_DETAILS,
    //     payload: [],
    //   });
    // }
  }
}
