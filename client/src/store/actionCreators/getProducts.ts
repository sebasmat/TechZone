import { Dispatch } from "redux";
import { Action, ActionType } from "@/store/actionTypes";
import axios from "axios";

export const getProducts = (page: number | null, category: string | null, brand: string | null) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      if (category && brand) {
        const { data } = await axios.get(`http://localhost:3001/products?category=${category}&brand=${brand}`);
        dispatch({
          type: ActionType.GET_PRODUCTS,
          payload: data,
        });
      } else if (category) {
        const { data } = await axios.get(`http://localhost:3001/products?category=${category}`);
        dispatch({
          type: ActionType.GET_PRODUCTS,
          payload: data,
        });
      } else if (brand) {
        const { data } = await axios.get(`http://localhost:3001/products?brand=${brand}`);
        dispatch({
          type: ActionType.GET_PRODUCTS,
          payload: data,
        });
      } else {
        const { data } = await axios.get(`http://localhost:3001/products?page=${page}`);
        dispatch({
          type: ActionType.GET_PRODUCTS,
          payload: data,
        })
      };
    } catch (err: any) {
      dispatch({
        type: ActionType.GET_PRODUCTS,
        payload:{
          content:[],
          totalPages: 0
        }
      });
    }
  };
};
