import ProductReducerInterface from "@/interfaces/productsReducerInterface";
import { Action, ActionType } from "@/store/actionTypes";

const initialState: ProductReducerInterface = {
  ProductsFromDb: [],
  totalPages: 0,
  origin: []
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
        origin: action.payload.origin, 
      }
    case ActionType.GET_PRODUCTS:
      return {
        ProductsFromDb: action.payload.content,
        totalPages: action.payload.totalPages,
        origin: action.payload.origin,
      };
    default:
      return state;
  }
};

export default productsReducer;
