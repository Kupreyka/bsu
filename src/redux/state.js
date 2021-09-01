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
    _addPost() {
        this._state.ProfilePage.messageData.push(
            {message: this._state.ProfilePage.NewPostText}
        );
        this._state.ProfilePage.NewPostText = ''
        this._Rerender(this._state)
    },
    _updateNewPostText(newPostText) {
        this._state.ProfilePage.NewPostText = newPostText
        this._Rerender(this._state)
    },
    _AddMessage() {
        this._state.DialogsPage.MessageData.push(
            {message: this._state.DialogsPage.NewMessageText}
        );
        this._state.DialogsPage.NewMessageText = '';
        this._Rerender(this._state)
    },
    _AddNewMessageText(newMessage) {
        this._state.DialogsPage.NewMessageText = newMessage;
        this._Rerender(this._state)
    },
    subscribe(observer) {
        this._Rerender = observer
    },
    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                this._addPost()
                break
            case UPDATE_NEW_POST_TEXT:
                this._updateNewPostText(action.newPostText)
                break
            case  ADD_MESSAGE :
                this._AddMessage()
                break
            case  ADD_NEW_MESSAGE_TEXT:
                this._AddNewMessageText(action.newMessage)
                break
            default:
                return this._state
        }
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