import { Action, ActionType } from "../actionTypes";

export interface Search {
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

export interface SearchState {
    searchs: Search[];
    loading: boolean;
    error: string | null;
}

const initialState: SearchState = {
    searchs: [],
    loading: false,
    error: null
}

const searchReducer = (
    state: SearchState = initialState,
    action: Action
): SearchState => {
    switch (action.type) {
        case ActionType.GET_SEARCH_PENDING:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case ActionType.GET_SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                searchs: action.payload,
                error: null,
            };
        case ActionType.GET_SEARCH_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
} 

export default searchReducer;