import { combineReducers } from "redux";
import commentReducer from "./index";
import postReducer from "@/store/reducers/postReducer";

const reducers = combineReducers({
  comments: commentReducer,
  posts: postReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
