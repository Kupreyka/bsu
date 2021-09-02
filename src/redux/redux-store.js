import {combineReducers, createStore} from "redux";
import ProfilePageReducer from "./Profile-page-reducer";
import DialogsPageReducer from "./Dialogs-page-reducer";


let Reducers = combineReducers(
    {
        ProfilePage: ProfilePageReducer,
        DialogsPage: DialogsPageReducer
    }
)

let store = createStore(Reducers);


export default store;
