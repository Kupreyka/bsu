import DialogsPageReducer from "./Dialogs-page-reducer";
import ProfilePageReducer from "./Profile-page-reducer";

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

export default store
window.store = store;