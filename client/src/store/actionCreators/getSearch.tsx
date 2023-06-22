import axios from "axios";
import { Dispatch } from "redux";
import { ActionType, Action } from "../actionTypes";
import type {} from "redux-thunk/extend-redux";

export const getSearchs = (name: string, page: number) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.get(
        `https://tech-zone-api-n786.onrender.com/products?name=${name}&page=${page}`
      );
      dispatch({
        type: ActionType.GET_SEARCH,
        payload: data,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.GET_SEARCH,
        payload: {
          content: [],
          totalPages: 0,
          origin: [],
        },
      });
    }
  };
};
