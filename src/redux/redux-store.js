import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfilePageReducer from "./Profile-page-reducer";
import DialogsPageReducer from "./Dialogs-page-reducer";
import FriendsReducer from "./Friends-page-reducer";
import AuthReducer from "./Auth-reducer";
import thunkMiddleware from "redux-thunk";

let Reducers = combineReducers(
    {
        ProfilePage: ProfilePageReducer,
        DialogsPage: DialogsPageReducer,
        FriendsPage: FriendsReducer,
        Auth: AuthReducer
    }
)

let store = createStore(Reducers, applyMiddleware(thunkMiddleware));

export default store;
window.store = store;