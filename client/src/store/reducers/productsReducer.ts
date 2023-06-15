import ProductReducerInterface from "@/interfaces/productsReducerInterface";
import { Action, ActionType } from "@/store/actionTypes";

const initialState: ProductReducerInterface = {
  ProductsFromDb: [],
  totalPages: 0
};

const productsReducer = (
  state: ProductReducerInterface = initialState,
  action: Action
): ProductReducerInterface => {
  switch (action.type) {
    case ActionType.GET_SEARCH:
      console.log(action)
      return{
        ProductsFromDb: action.payload.content,
        totalPages: action.payload.totalPages,
      }
    case ActionType.GET_PRODUCTS:
      return {
        ProductsFromDb: action.payload.content,
        totalPages: action.payload.totalPages 
      };
    default:
      return state;
  }
};

export default productsReducer;
