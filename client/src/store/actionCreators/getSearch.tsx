import axios from "axios";
import { Dispatch } from 'redux';
import { ActionType, Action } from "../actionTypes";
import { Search } from "../reducers/searchReducer";
import type {} from "redux-thunk/extend-redux";

export const getSearchs = (arraySearch:Search[]) => {
    return async (dispatch: Dispatch<Action>) => {
      dispatch({
        type: ActionType.GET_SEARCH_PENDING,
      });
      try {
        // aqui se hara la peticion al servidor para que me traiga la busqueda por nombre
        // const { data } = await axios.get(
        //   "https://jsonplaceholder.typicode.com/posts"
        // );
        let result:Search[] = arraySearch;
        dispatch({
          type: ActionType.GET_SEARCH_SUCCESS,
          payload: result,
        });
      } catch (err: any) {
        dispatch({
          type: ActionType.GET_SEARCH_FAIL,
          payload: err.message,
        });
      }
    };
  };