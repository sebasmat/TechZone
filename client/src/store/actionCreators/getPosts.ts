import { Dispatch } from "redux";
import { Action, ActionType } from "@/store/actionTypes";
import axios from "axios";
import type {} from "redux-thunk/extend-redux";

export const getPosts = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_POSTS_PENDING,
    });
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch({
        type: ActionType.GET_POSTS_SUCCESS,
        payload: data,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.GET_POSTS_FAIL,
        payload: err.message,
      });
    }
  };
};
