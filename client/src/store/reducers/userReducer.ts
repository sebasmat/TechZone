import UserInterface from "@/interfaces/userInterface";
import { Action, ActionType } from "@/store/actionTypes";

// const initialState: ProductReducerInterface = {
//   ProductsFromDb: [],
// };

interface UserReducerInterface {
  UserFromDb: UserInterface;
  Error: string | undefined;
  Loading: boolean;
}

const initialState: UserReducerInterface = {
  UserFromDb: {},
  Error: undefined,
  Loading: false,
};

const userReducer = (
  state: UserReducerInterface = initialState,
  action: Action
): UserReducerInterface => {
  switch (action.type) {
    case ActionType.GET_USER:
      return {
        UserFromDb: action.payload,
        Error: undefined,
        Loading: false,
      };
    case ActionType.GET_USER_ERROR:
      return {
        UserFromDb: {},
        Error: action.payload,
        Loading: false,
      };
    case ActionType.GET_USER_LOADING:
      return {
        ...state,
        Loading: true,
      };
    default:
      return state;
  }
};

export default userReducer;
