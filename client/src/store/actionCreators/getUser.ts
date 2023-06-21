import axios from "axios";
import { Dispatch } from "redux";
import { ActionType, Action } from "../actionTypes";
import type {} from "redux-thunk/extend-redux";

export const getUser = (email: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.GET_USER_LOADING,
      });

      const { data } = await axios.get(
        `https://tech-zone-api-n786.onrender.com/users?email=${email}`
      );

      dispatch({
        type: ActionType.GET_USER,
        payload: data,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.GET_USER_ERROR,
        payload: err.message,
      });
    }
  };
};
