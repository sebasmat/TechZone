import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import productsReducer from "@/store/reducers/productsReducer";
import productReducer from "./index";

const reducers = combineReducers({
  product: productReducer,
  searchs: searchReducer,
  products: productsReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
