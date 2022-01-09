import {UsersAPI} from "../API/Api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const AuthReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }

}


export const setUserData = (id, login, email) => ({type: SET_USER_DATA, data: {id, login, email}})

export const Auth = () => {
    return (dispatch) => {
        UsersAPI.auth()
            .then(response => {
                if (response.resultCode === 0) {
                    let {id, login, email} = response.data;
                    dispatch(setUserData(id, login, email))
                }
            })
    }
}


export default AuthReducer;