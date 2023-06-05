import ProductReducerInterface from "@/interfaces/productsReducerInterface";
import { Action, ActionType } from "@/store/actionTypes";

const initialState: ProductReducerInterface = {
  ProductsFromDb: [],
};

const productsReducer = (
  state: ProductReducerInterface = initialState,
  action: Action
): ProductReducerInterface => {
  switch (action.type) {
    case ActionType.GET_PRODUCTS:
      return {
        ProductsFromDb: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
