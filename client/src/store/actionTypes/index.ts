import { Comment } from "../reducers";
import { Post } from "@/store/reducers/postReducer";

export enum ActionType {
  GET_POST_COMMENTS_PENDING = "GET_POST_COMMENTS_PENDING",
  GET_POST_COMMENTS_SUCCESS = "GET_POST_COMMENTS_SUCCESS",
  GET_POST_COMMENTS_FAIL = "GET_POST_COMMENTS_FAIL",
  GET_POSTS_PENDING = "GET_POSTS_PENDING",
  GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS",
  GET_POSTS_FAIL = "GET_POSTS_FAIL",
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

interface actionPendingPosts {
  type: ActionType.GET_POSTS_PENDING;
}

interface actionSuccessPosts {
  type: ActionType.GET_POSTS_SUCCESS;
  payload: Post[];
}

interface actionFailPosts {
  type: ActionType.GET_POSTS_FAIL;
  payload: string;
}

export type Action =
  | actionPending
  | actionSuccess
  | actionFail
  | actionPendingPosts
  | actionSuccessPosts
  | actionFailPosts;
