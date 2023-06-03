import { Action, ActionType } from "@/store/actionTypes";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface PostState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
};

const postReducer = (
  state: PostState = initialState,
  action: Action
): PostState => {
  switch (action.type) {
    case ActionType.GET_POSTS_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionType.GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: null,
      };
    case ActionType.GET_POSTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
