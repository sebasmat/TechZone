import { Action, ActionType } from "../actionTypes";
import detailInterface from "../../interfaces/detailInterface"

const initialState: detailInterface = {
  detail: [],
};

const productReducer = (
  state: detailInterface = initialState,
  action: Action
): detailInterface => {
  switch (action.type) {
    case ActionType.GET_DETAILS:
      return {
        detail: [],
      };
    default:
      return state;
  }
};

export default productReducer;