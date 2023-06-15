import { Dispatch } from "redux";
import { Action, ActionType } from "@/store/actionTypes";
import axios from "axios";

export const getProducts = (page: number) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/products?page=${page}`
      );
      dispatch({
        type: ActionType.GET_PRODUCTS,
        payload: data.content,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.GET_PRODUCTS,
        payload: [],
      });
    }
  };
};
