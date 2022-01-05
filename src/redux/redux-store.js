import {combineReducers, createStore} from "redux";
import ProfilePageReducer from "./Profile-page-reducer";
import DialogsPageReducer from "./Dialogs-page-reducer";
import FriendsReducer from "./Friends-page-reducer";
import AuthReducer from "./Auth-reducer";

let Reducers = combineReducers(
    {
        ProfilePage: ProfilePageReducer,
        DialogsPage: DialogsPageReducer,
        FriendsPage: FriendsReducer,
        Auth: AuthReducer
    }
)

let store = createStore(Reducers);

export default store;
window.store = store;