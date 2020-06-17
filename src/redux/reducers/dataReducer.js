import {LOADING_DATA, SEND_MAIL, SET_GMAIL_DATA, SET_AUTO_REPLY_DATA} from '../types'

const initialState = {
    loading: false,
    gmailData: {},
    sendMailMessage: '',
    autoReplyData: []
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

        case SEND_MAIL:
            return {
                ...state,
                loading: false,
                sendMailMessage: action.payload
            }

        case SET_AUTO_REPLY_DATA:
            return {
                ...state,
                loading: false,
                autoReplyData: action.payload
            }

        default:
            return state
    }
}
