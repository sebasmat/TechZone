import { Dispatch } from "redux";
import { Action, ActionType } from "@/store/actionTypes";
import axios from "axios";

export const getProducts = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/products}`);
      dispatch({
        type: ActionType.GET_PRODUCTS,
        payload: data,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.GET_PRODUCTS,
        payload: [],
      });
    }
  };
};
