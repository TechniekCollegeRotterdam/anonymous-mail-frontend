import {LOADING_UI, SET_ERRORS, CLEAR_ERRORS} from '../types'
import axios from 'axios';

export const loginUser = (loginData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios
        .post('/loginWithEmailAndPassword', loginData)
        .then((res) => {
            setAuthenicationHeader(res.data.token)
            //dispatch(getUserData())
            //dispatch({ type: CLEAR_ERRORS})
            // Redirect to homepage if login successful
            history.push('/dashboard');
        })
        .catch((err) => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        })
}

const setAuthenicationHeader = (token) => {
    // Save user token in localstorage
    localStorage.setItem('FBToken', token)
    // Add the token to the axios Authorization header
    axios.defaults.headers.common['Authorization'] = token
}