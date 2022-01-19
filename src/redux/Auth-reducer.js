import {AuthAPI} from "../API/Api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const AuthReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }

}


export const setUserData = (id, login, email, isAuth) => ({type: SET_USER_DATA, data: {id, login, email, isAuth}})

export const Auth =  () => {
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
export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        AuthAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(Auth())
                }
                else {
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


export default AuthReducer;