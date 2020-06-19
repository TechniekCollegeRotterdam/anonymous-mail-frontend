import {
    LOADING_DATA,
    SEND_MAIL,
    SET_ERRORS,
    SET_GMAIL_DATA,
    SET_AUTO_REPLY_DATA,
    ADD_AUTO_REPLY,
    STOP_LOADING_UI,
    SET_SPAMMER
} from '../types'
import axios from 'axios';

export const getGmailData = () => (dispatch) => {
    dispatch({ type: LOADING_DATA })
    axios
        .get('/gmailData')
        .then((res) => {
            dispatch({
                type: SET_GMAIL_DATA,
                payload: res.data
            })
            console.log(res.data)
        })
        .catch(err => console.log(err))
}

export const sendMail = (mailData) => (dispatch) => {
    dispatch({ type: LOADING_DATA })
    axios
        .post('/sendMail', mailData)
        .then((res) => {
            dispatch({
                type: SEND_MAIL,
                payload: res.data
            })
        })
        .catch((err) => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        })
}

export const getAutoReplyData = () => (dispatch) => {
    dispatch({ type: LOADING_DATA })
    axios
        .get('/getAutoReplies')
        .then((res) => {
            dispatch({
                type: SET_AUTO_REPLY_DATA,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: SET_AUTO_REPLY_DATA,
                payload: []
            })
            console.log(err)
        })
}

export const addAutoReply = (autoReplyData) => (dispatch) => {
    dispatch({ type: LOADING_DATA })
    axios
        .post('/addAutoReply', autoReplyData)
        .then((res) => {
            dispatch({
                type: ADD_AUTO_REPLY,
                payload: res.data
            })

            dispatch({
                type: STOP_LOADING_UI
            })
        })
        .catch((err) => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        })
}

export const getSpammers = () => (dispatch) => {
    dispatch({ type: LOADING_DATA })
    axios
        .get('/getSpamEmailAddresses')
        .then((res) => {
            dispatch({
                type: SET_SPAMMER,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}
