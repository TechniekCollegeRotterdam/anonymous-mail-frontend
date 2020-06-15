import {LOADING_DATA, SET_GMAIL_DATA} from '../types'

const initialState = {
    loading: false,
    gmailData: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOADING_DATA:
            return {
                ...state,
                loading: true
            }

        case SET_GMAIL_DATA:
            return {
                ...state,
                loading: false,
                gmailData: action.payload
            }

        default:
            return state
    }
}
