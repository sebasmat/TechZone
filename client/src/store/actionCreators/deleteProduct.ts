import { Dispatch } from "redux";
import { Action, ActionType } from "../actionTypes";

export function deleteProduct() {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DELETE_DETAILS,
      payload: [],
    });
  };
}

// export const getDetails = (id: number) => {
//   return async (dispatch: Dispatch<Action>) => {
//     console.log(id)
//     const { data } = await axios.get(`https://tech-zone-api-n786.onrender.com/products/${id}`);
//     console.log(data)

//     // try {
//       dispatch({
//         type: ActionType.GET_DETAILS,
//         payload: [data],
//       });
