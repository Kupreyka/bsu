
let store = {
    _state : {
        ProfilePage: {
            messageData: [
                {message: 'Hello'},
                {message: 'How are you?'},
                {message: 'Sorry'}
            ],
            NewPostText:''
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
    getState(){
        return this._state
    },
    _Rerender () {

    },
    AddPost () {
        this._state.ProfilePage.messageData.push(
            {message: this._state.ProfilePage.NewPostText}
        );
        this._state.ProfilePage.NewPostText = ''
        this._Rerender(this._state)
    },
    UpdateNewPostText (newPostText) {
        this._state.ProfilePage.NewPostText = newPostText
        this._Rerender(this._state)
    },
    AddMessage () {
        this._state.DialogsPage.MessageData.push(
            {message: this._state.DialogsPage.NewMessageText}
        );
        this._state.DialogsPage.NewMessageText = '';
        this._Rerender(this._state)
    },
    AddNewMessageText (newMessage) {
        this._state.DialogsPage.NewMessageText = newMessage;
        this._Rerender(this._state)
    },
    subscribe (observer) {
        this._Rerender = observer
    }
}

export default store
window.store = store;