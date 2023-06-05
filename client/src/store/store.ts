import { createStore, applyMiddleware, AnyAction, Reducer, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { createWrapper, MakeStore, HYDRATE } from "next-redux-wrapper";
import reducers from "@/store/reducers/combine";

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
interface Detail {
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

export interface State {
  comments: Comment[];
  loading: boolean;
  error: string | null;
  detail: Detail[],
}

const reducer: Reducer<Partial<State>, AnyAction> = (state, action) => {
  if (action.type === HYDRATE) {
    /* client state will be overwritten
     * by server or static state hydation.
     * Implement state preservation as needed.
     * see: https://github.com/kirill-konshin/next-redux-wrapper#server-and-client-state-separation
     */
    return {
      ...state,
      ...action.payload,
    };
  }
  // @ts-ignore
  return reducers(state, action);
};

/**
 * initStore
 * Initialise and export redux store
 */
const initStore: MakeStore<Store<Partial<State>>> = () => {
  return createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};

export const storeWrapper = createWrapper<Store<Partial<State>>>(initStore);
