import ProductInterface from "@/interfaces/productsInterface";
import UserInterface from "@/interfaces/userInterface";

export enum ActionType {
  GET_DETAILS = "GET_DETAILS",
  GET_SEARCH = "GET_SEARCH",
  GET_PRODUCTS = "GET_PRODUCTS",
  DELETE_DETAILS = "DELETE_DETAILS",
  GET_USER = "GET_USER",
  GET_USER_ERROR = "GET_USER_ERROR",
  GET_USER_LOADING = "GET_USER_LOADING",
}

interface actionDeleteDetails {
  type: ActionType.DELETE_DETAILS;
  payload: [];
}

interface actionDetails {
  type: ActionType.GET_DETAILS;
  payload: ProductInterface[];
}

interface actionSearch {
  type: ActionType.GET_SEARCH;
  payload: ProductInterface[];
}

interface actionProducts {
  type: ActionType.GET_PRODUCTS;
  payload: ProductInterface[];
}

interface actionUser {
  type: ActionType.GET_USER;
  payload: UserInterface;
}

interface actionUserError {
  type: ActionType.GET_USER_ERROR;
  payload: string | undefined;
}

interface actionUserLoading {
  type: ActionType.GET_USER_LOADING;
}

export type Action =
  | actionDetails
  | actionProducts
  | actionSearch
  | actionDeleteDetails
  | actionUser
  | actionUserError
  | actionUserLoading;
