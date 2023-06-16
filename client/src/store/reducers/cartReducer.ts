import ShoppingCartInterface from "@/interfaces/shoppingCartInterface";
import { Action, ActionType } from "@/store/actionTypes";

interface CartReducerInterface {
  CartItems: ShoppingCartInterface;
  Error: string | undefined;
  Loading: boolean;
}

const initialStateCart: CartReducerInterface = {
  CartItems: {
    products: [],
    user: {},
  },
  Error: undefined,
  Loading: false,
};

const cartReducer = (
  state: CartReducerInterface = initialStateCart,
  action: Action
): CartReducerInterface => {
  switch (action.type) {
    case ActionType.GET_CART_ITEMS:
      return {
        CartItems: action.payload,
        Error: undefined,
        Loading: false,
      };
    case ActionType.GET_CART_ITEMS_ERROR:
      return {
        CartItems: {
          products: [],
          user: {},
        },
        Error: action.payload,
        Loading: false,
      };
    default:
      return state;
  }
};

export default cartReducer;
