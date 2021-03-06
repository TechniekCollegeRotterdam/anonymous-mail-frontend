import {
    LOADING_DATA,
    SEND_MAIL,
    SET_GMAIL_DATA,
    SET_AUTO_REPLY_DATA,
    ADD_AUTO_REPLY,
    SET_SPAMMER,
    ADD_SPAMMER,
    DELETE_SPAMMER
} from '../types'

const initialState = {
    loading: false,
    gmailData: {},
    sendMailMessage: '',
    autoReplyData: [],
    autoReplySendMessage: '',
    spammerData: [],
    spamMessage: ''
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

        case SET_SPAMMER:
            return {
                ...state,
                loading: false,
                spammerData: action.payload
            }

        case ADD_SPAMMER:
            return {
                ...state,
                loading: false,
                spamMessage: action.payload
            }

        case DELETE_SPAMMER:
            let deletedSpammerIndex = state.spammerData.findIndex((spammer) => spammer.spammedEmailId === action.payload)
            state.spammerData.splice(deletedSpammerIndex, 1)
            return {
                ...state
            }

        default:
            return state
    }
}
