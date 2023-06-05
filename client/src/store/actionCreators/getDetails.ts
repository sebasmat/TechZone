import axios from "axios";
import { Dispatch } from "redux";
import { ActionType, Action } from "../actionTypes";

export const getDetails = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    const { data } = await axios.get(`http://localhost:3000/products/${id}`);
    try {
      dispatch({
        type: ActionType.GET_DETAILS,
        payload: data,
      });
    } catch {
      dispatch({
        type: ActionType.GET_DETAILS,
        payload: {
          id: "",
          category: "",
          brand: "",
          name: "",
          imageDetail: "",
          imageCard: "",
          description: "",
          price: 0,
          available: true,
          stock: 0,
        },
      });
    }
  };
};
