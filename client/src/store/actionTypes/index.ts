import ProductInterface from "@/interfaces/productsInterface";

export enum ActionType {
  GET_DETAILS = "GET_DETAILS",
  GET_SEARCH = "GET_SEARCH",
  GET_PRODUCTS = "GET_PRODUCTS",
  DELETE_DETAILS = "DELETE_DETAILS"
}

interface actionDeleteDetails{
  type: ActionType.DELETE_DETAILS;
  payload:[];
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

export type Action = actionDetails | actionProducts | actionSearch | actionDeleteDetails;
