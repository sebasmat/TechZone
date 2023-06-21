import ProductInterface from "@/interfaces/productsInterface";
import ProductReducerInterface from "@/interfaces/productsReducerInterface";
import ShoppingCartInterface from "@/interfaces/shoppingCartInterface";
import UserInterface from "@/interfaces/userInterface";
import favoritesInterface from "@/interfaces/favoritesInterface"
export enum ActionType {
  GET_DETAILS = "GET_DETAILS",
  GET_SEARCH = "GET_SEARCH",
  GET_PRODUCTS = "GET_PRODUCTS",
  DELETE_DETAILS = "DELETE_DETAILS",
  GET_USER = "GET_USER",
  GET_USER_ERROR = "GET_USER_ERROR",
  GET_USER_LOADING = "GET_USER_LOADING",
  GET_CART_ITEMS = "GET_CART_ITEMS",
  GET_CART_ITEMS_ERROR = "GET_CART_ITEMS_ERROR",
  GET_FAV_ITEMS = "GET_FAV_ITEMS",
  GET_FAV_ITEMS_ERROR = "GET_FAV_ITEMS_ERROR",
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
  payload: {
    content: ProductInterface[],
    totalPages: number,
    origin: string[],
  };
}

interface actionProducts {
  type: ActionType.GET_PRODUCTS;
  payload: {
    content: ProductInterface[],
    totalPages: number,
    origin: string[]
  };
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

interface actionCartItems {
  type: ActionType.GET_CART_ITEMS;
  payload: ShoppingCartInterface;
}

interface actionCartItemsError {
  type: ActionType.GET_CART_ITEMS_ERROR;
  payload: string | undefined;
}

interface actionFavFitems{
  type: ActionType.GET_FAV_ITEMS;
  payload: favoritesInterface
}

interface actionFavItemsError {
  type : ActionType.GET_FAV_ITEMS_ERROR;
  payload: string | undefined
}

export type Action =
  | actionDetails
  | actionProducts
  | actionSearch
  | actionDeleteDetails
  | actionUser
  | actionUserError
  | actionUserLoading
  | actionCartItems
  | actionCartItemsError
  |actionFavFitems
  |actionFavItemsError;
