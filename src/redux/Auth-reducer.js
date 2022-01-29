import {AuthAPI, SecurityAPI} from "../API/Api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS'


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captcha: null
}

const AuthReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }

}


export const setUserData = (id, login, email, isAuth) => ({type: SET_USER_DATA, data: {id, login, email, isAuth}})
const getCaptchaSuccess = (captcha) => ({type: GET_CAPTCHA_URL_SUCCESS, data: {captcha}})

export const Auth = () => {
    return (dispatch) => {
        return AuthAPI.auth()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    dispatch(setUserData(id, login, email, true))
                }
            })
    }
}
export const login = (email, password, rememberMe, captcha) => {
    return (dispatch) => {
        AuthAPI.login(email, password, rememberMe, captcha)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(Auth())
                } else {
                    if (response.data.resultCode === 10) {
                        dispatch(getCaptchaUrl())
                    }
                    dispatch(stopSubmit('login', {_error: response.data.messages}))
                }
            })
    }
}
export const logout = () => {
    return (dispatch) => {
        AuthAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserData(null, null, null, false))
                }
            })
    }
}
export const getCaptchaUrl = () => {
    return (dispatch) => {
        SecurityAPI.getCaptchaUrl()
            .then(response => {
                let captcha = response.data.url;
                dispatch(getCaptchaSuccess(captcha))
            })
    }
}


export default AuthReducer;