import {LOADING_DATA, SET_GMAIL_DATA} from '../types'
import axios from 'axios';

export const getGmailData = () => (dispatch) => {
    dispatch({ type: LOADING_DATA })
    axios
        .get('/gmailData', {

        })
        .then((res) => {
            dispatch({
                type: SET_GMAIL_DATA,
                payload: res.data
            })
            console.log(res.data)
        })
        .catch(err => console.log(err))
}
