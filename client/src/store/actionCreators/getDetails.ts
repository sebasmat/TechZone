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
    }catch (err: any) {
      dispatch({
        type: ActionType.GET_DETAILS,
        payload: [],
      });
    }
  }
}
