
import { Dispatch } from "redux";
import { ActionType, Action } from "../actionTypes";

export const deleteDetails = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DELETE_DETAILS,
            payload:[]
          });
    };
  };
  