import { SET_AUTHENTICATED, SET_UNAUTHENTICATED, SET_USER, LOADING_USER } from "../types";

const initialState = {
    loading: false,
    authenticated: false,
    credentials: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true
            }

        case SET_UNAUTHENTICATED:
            return initialState

        case SET_USER:
            return {
                ...state,
                loading: false,
                credentials: action.payload
            }

        case LOADING_USER:
            return {
                ...state,
                loading: true
            }

        default:
            return state
    }
}
