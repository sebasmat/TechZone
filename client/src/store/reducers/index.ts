import { Action, ActionType } from "../actionTypes";

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface State {
  comments: Comment[];
  loading: boolean;
  error: string | null;
  detail:Detail[];
}
export interface Detail {
  id: string,
  category: string,
  brand: string,
  name: string,
  imageDetail: string,
  imageCard: string,
  description: string,
  price: number,
  available: true,
  stock: number
} 

const initialState = {
  comments: [],
  loading: false,
  error: null,
  detail:[]
};

const commentReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.GET_POST_COMMENTS_PENDING:
      return {
        ...state,
        loading: true,
        comments: [],
        error: null,
      };
    case ActionType.GET_POST_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.payload,
        error: null,
      };
    case ActionType.GET_POST_COMMENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        comments: [],
      };
      case ActionType.GET_DETAILS:
      return {
        ...state,
        detail: action.payload,
      };
      case ActionType.DELETE_DETAILS:
      return {
        ...state,
        detail: [],
      };
    default:
      return state;
  }
};

export default commentReducer;
