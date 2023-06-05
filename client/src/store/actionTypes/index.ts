import { Comment, Detail } from "../reducers";

export enum ActionType {
  GET_POST_COMMENTS_PENDING = "GET_POST_COMMENTS_PENDING",
  GET_POST_COMMENTS_SUCCESS = "GET_POST_COMMENTS_SUCCESS",
  GET_POST_COMMENTS_FAIL = "GET_POST_COMMENTS_FAIL",
  GET_DETAILS = "GET_DETAILS",
  DELETE_DETAILS = "DELETE_DETAILS",
  GET_SEARCH_PENDING = "GET_SEARCH_PENDING",
  GET_SEARCH_SUCCESS = "GET_SEARCH_SUCCESS",
  GET_SEARCH_FAIL = "GET_SEARCH_FAIL",
}

interface actionPending {
  type: ActionType.GET_POST_COMMENTS_PENDING;
}

interface actionSuccess {
  type: ActionType.GET_POST_COMMENTS_SUCCESS;
  payload: Comment[];
}

interface actionFail {
  type: ActionType.GET_POST_COMMENTS_FAIL;
  payload: string;
}
interface actionDetails {
  type: ActionType.GET_DETAILS;
  payload: Detail[]
}
interface actionDeleteDetails {
  type: ActionType.DELETE_DETAILS;
  payload:[]
}
interface actionPendingSearch {
  type: ActionType.GET_SEARCH_PENDING,
}
interface actionSuccessSearch {
  type: ActionType.GET_SEARCH_SUCCESS,
  payload: Search[]
}
interface actionFailSearch {
  type: ActionType.GET_SEARCH_FAIL,
  payload: string
}


export type Action = actionPending | actionSuccess | actionFail |
actionDetails | actionDeleteDetails |
actionPendingSearch | actionSuccessSearch | actionFailSearch;
