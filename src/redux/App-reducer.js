import {Auth} from "./Auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'


let initialState = {
    initialized: false
}

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => dispatch => {
        let promise = dispatch(Auth())
        Promise.all([promise]).then(
            () => {
                dispatch(initializedSuccess())
            }
        )
}

export default AppReducer