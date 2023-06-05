import { combineReducers } from "redux";
import commentReducer from "./index";
import searchReducer from "./searchReducer";

const reducers = combineReducers({
  comments: commentReducer,
  searchs: searchReducer
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;