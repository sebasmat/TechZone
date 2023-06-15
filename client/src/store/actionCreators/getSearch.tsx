import axios from "axios";
import { Dispatch } from "redux";
import { ActionType, Action } from "../actionTypes";
import type {} from "redux-thunk/extend-redux";

export const getSearchs = (name: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/products?name=${name}`
      );
      dispatch({
        type: ActionType.GET_SEARCH,
        payload: data,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.GET_SEARCH,
        payload: [],
      });
    }
  };
};
