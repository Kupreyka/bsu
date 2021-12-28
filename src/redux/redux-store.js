import {combineReducers, createStore} from "redux";
import ProfilePageReducer from "./Profile-page-reducer";
import DialogsPageReducer from "./Dialogs-page-reducer";
import friendsReducer from "./Friends-page-reducer";

let Reducers = combineReducers(
    {
        ProfilePage: ProfilePageReducer,
        DialogsPage: DialogsPageReducer,
        FriendsPage: friendsReducer
    }
)

let store = createStore(Reducers);

export default store;
window.store = store;