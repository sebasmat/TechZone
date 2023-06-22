import axios from "axios";
import { Dispatch } from "redux";
import { ActionType, Action } from "../actionTypes";
import type {} from "redux-thunk/extend-redux";

export const putUser = (userData: any) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.put(
        `http://localhost:3001/create/User/${userData.email}`,
        {
          email: userData.email,
          name: userData.name,
          profileIMG: userData.profileIMG,
          direction: userData.direction,
          cellPhone: userData.cellPhone,
          Gender: userData.Gender,
        }
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
