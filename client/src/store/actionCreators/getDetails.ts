import axios from "axios";
import { Dispatch } from "redux";
import { ActionType, Action } from "../actionTypes";

export const getDetails = (id: string) => {
    return async (dispatch: Dispatch<Action>) => {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        );
        console.log(data);
        dispatch({
          type: ActionType.GET_DETAILS,
          payload: data,
        });
      } 
    };

  