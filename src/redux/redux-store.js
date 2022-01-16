import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfilePageReducer from "./Profile-page-reducer";
import DialogsPageReducer from "./Dialogs-page-reducer";
import FriendsReducer from "./Friends-page-reducer";
import AuthReducer from "./Auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import AppReducer from "./App-reducer";


let Reducers = combineReducers(
    {
        ProfilePage: ProfilePageReducer,
        DialogsPage: DialogsPageReducer,
        FriendsPage: FriendsReducer,
        Auth: AuthReducer,
        app: AppReducer,
        form: formReducer,
    }
)

let store = createStore(Reducers, applyMiddleware(thunkMiddleware));

export default store;
window.store = store;