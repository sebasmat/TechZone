import { Dispatch } from "redux";
import { Action, ActionType } from "@/store/actionTypes";
import axios from "axios";

export const getProducts = (page: number | null, category: string | null, brand: string | null, price: string | null) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      if (category && brand && price) {
        const { data } = await axios.get(`http://localhost:3001/products?category=${category}&brand=${brand}&maxPrice=${price}&minPrice=0&page=${page}`);
        dispatch({
          type: ActionType.GET_PRODUCTS,
          payload: data,
        });
      } else if (category && brand) {
        const { data } = await axios.get(`http://localhost:3001/products?category=${category}&brand=${brand}&maxPrice=${price}&minPrice=0`);
        dispatch({
          type: ActionType.GET_PRODUCTS,
          payload: data,
        });
      } else if (category) {
        const { data } = await axios.get(`http://localhost:3001/products?category=${category}&maxPrice=${price}&minPrice=0`);
        dispatch({
          type: ActionType.GET_PRODUCTS,
          payload: data,
        });
      } 
      else if (brand) {
        const { data } = await axios.get(`http://localhost:3001/products?brand=${brand}&maxPrice=${price}&minPrice=0&page=${page}`);
        dispatch({
          type: ActionType.GET_PRODUCTS,
          payload: data,
        });
      } 
      else if (price) {
        const { data } = await axios.get(`http://localhost:3001/products?maxPrice=${price}&minPrice=0&page=${page}`);
        dispatch({
          type: ActionType.GET_PRODUCTS,
          payload: data,
        });
      }
       else {
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
          totalPages: 0,
          origin: []
        }
      });
    }
  };
};
