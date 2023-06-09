import { Action, ActionType } from "../actionTypes";
import ProductReducerInterface from "@/interfaces/productsReducerInterface";

const initialState: ProductReducerInterface = {
  ProductsFromDb: [],
};

const searchReducer = (
  state: ProductReducerInterface = initialState,
  action: Action
): ProductReducerInterface => {
  switch (action.type) {
    case ActionType.GET_SEARCH:
      return {
        ProductsFromDb: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
