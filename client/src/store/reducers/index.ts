import { Action, ActionType } from "../actionTypes";
import ProductInterface from "@/interfaces/productsInterface";

const initialState: ProductInterface = {
  id: "",
  category: "",
  brand: "",
  name: "",
  imageDetail: "",
  imageCard: "",
  description: "",
  price: 0,
  available: true,
  stock: 0,
};

const productReducer = (
  state: ProductInterface = initialState,
  action: Action
): ProductInterface => {
  switch (action.type) {
    case ActionType.GET_DETAILS:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
