import DialogsPageReducer from "./Dialogs-page-reducer";
import ProfilePageReducer from "./Profile-page-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        ProfilePage: {
            messageData: [
                {message: 'Hello'},
                {message: 'How are you?'},
                {message: 'Sorry'}
            ],
            NewPostText: ''
        },
        DialogsPage: {
            MessageData: [
                {message: 'Hello'},
                {message: 'How are you?'},
                {message: 'Goodbye'}
            ],
            nameData: [
                {id: 1, name: 'Kirill'},
                {id: 2, name: 'Svetlana'},
                {id: 3, name: 'Andrey'},
                {id: 4, name: 'Artem'},
                {id: 5, name: 'Alexey'}
            ],
            NewMessageText: ' '
        }
    },
    getState() {
        return this._state
    },
    _Rerender() {

    },
    subscribe(observer) {
        this._Rerender = observer
    },
    dispatch(action) {
        this._state.DialogsPage = DialogsPageReducer(this._state.DialogsPage, action)
        this._state.ProfilePage = ProfilePageReducer(this._state.ProfilePage, action)
        this._Rerender(this._state)

    }

}

export const AddPostActionCreator = () => {
    return{type:ADD_POST}
}
export const UpdateNewPostTextActionCreator =(text) => {
    return {type:UPDATE_NEW_POST_TEXT,newPostText: text}
}

export const AddMessageActionCreator=()=>{
    return {type:ADD_MESSAGE }
}
export const AddNewMessageTextActionCreator=(message)=>{
    return {type:ADD_NEW_MESSAGE_TEXT,newMessage: message }
}

export default store
window.store = store;