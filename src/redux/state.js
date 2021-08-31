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
            case 'ADD-POST':
                this._addPost()
                break
            case 'UPDATE-NEW-POST-TEXT':
                this._updateNewPostText(action.newPostText)
                break
            case  'ADD-MESSAGE' :
                this._AddMessage()
                break
            case  'ADD-NEW-MESSAGE-TEXT':
                this._AddNewMessageText(action.newMessage)
                break
            default:
                return this._state
        }
    }
}


export default store
window.store = store;