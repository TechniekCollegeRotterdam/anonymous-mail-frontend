import {LOADING_UI, SET_ERRORS, CLEAR_ERRORS, SET_UNAUTHENTICATED, LOADING_USER, SET_USER} from '../types'
import axios from 'axios';

export const loginUser = (loginData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios
        .post('/loginWithEmailAndPassword', loginData)
        .then((res) => {
            setAuthenicationHeader(res.data.token)
            dispatch({ type: CLEAR_ERRORS})
            history.push('/dashboard');
            window.location.reload()
        })
        .catch((err) => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        })
}

export const signUpUser = (newUserData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI })
    axios
        .post('/signUpWithEmailAndPassword', newUserData)
        .then((res) => {
            setAuthenicationHeader(res.data.token)
            dispatch({ type: CLEAR_ERRORS })
            history.push('/dashboard')
        })
        .catch((err) => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        })
}

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('FBToken')
    delete axios.defaults.headers.common['Authorization']
    dispatch({ type: SET_UNAUTHENTICATED })
    window.location.href = '/'
}

export const getSettingsUser = () => (dispatch) => {
    dispatch({ type: LOADING_USER })
    axios
        .get('/getOwnUserData')
        .then((res) => {
            dispatch({
                type: SET_USER,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}


const setAuthenicationHeader = (token) => {
    // Save user token in localstorage
    localStorage.setItem('FBToken', token)
    // Add the token to the axios Authorization header
    axios.defaults.headers.common['Authorization'] = token
}
