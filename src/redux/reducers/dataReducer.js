import {LOADING_DATA, SEND_MAIL, SET_GMAIL_DATA, SET_AUTO_REPLY_DATA, ADD_AUTO_REPLY} from '../types'

const initialState = {
    loading: false,
    gmailData: {},
    sendMailMessage: '',
    autoReplyData: [],
    autoReplySendMessage: ''
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

        case ADD_AUTO_REPLY:
            return {
                ...state,
                loading: false,
                autoReplySendMessage: action.payload,
                autoReplyData: [
                    action.payload,
                    ...state.autoReplyData
                ]
            }

        default:
            return state
    }
}
