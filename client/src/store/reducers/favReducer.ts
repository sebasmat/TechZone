import ProductReducerInterface from "@/interfaces/productsReducerInterface";
import FavoritesInterface from "@/interfaces/favoritesInterface";
import UserInterface from "@/interfaces/userInterface";
import {Action, ActionType} from "@/store/actionTypes"

interface FavReducerInterface {
    FavItems: FavoritesInterface;
    Error: string | undefined;
    Loading: boolean;
}

const initialStateFav: FavReducerInterface = {
    FavItems: {
        products: [],
        user: {},
    },
    Error: undefined,
    Loading: false,
};

const FavReducer = (
    state: FavReducerInterface = initialStateFav,
    action: Action
): FavReducerInterface => {
    switch (action.type) {
        case ActionType.GET_FAV_ITEMS:
            return{
                FavItems: action.payload,
                Error: undefined,
                Loading: false,
            };
        case ActionType.GET_FAV_ITEMS_ERROR:
            return{
                FavItems:{
                    products: [],
                    user: {},
                },
                Error: action.payload,
                Loading: false,
            };
            break;
    
        default:
            return state
    }
};

export default FavReducer;