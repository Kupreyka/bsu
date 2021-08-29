import {Rerender} from "../Render";



let state = {
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
}

export let AddPost = () => {
    state.ProfilePage.messageData.push(
        {message: state.ProfilePage.NewPostText}
    );
    state.ProfilePage.NewPostText = ''
    Rerender(state)
}

export let UpdateNewPostText = (newPostText) => {
    state.ProfilePage.NewPostText = newPostText
    Rerender(state)
}

export let AddMessage = () => {
    state.DialogsPage.MessageData.push(
        {message: state.DialogsPage.NewMessageText}
    );
    state.DialogsPage.NewMessageText = '';
    Rerender(state)
}

export let AddNewMessageText = (newMessage) => {
    state.DialogsPage.NewMessageText = newMessage;
    Rerender(state)
}
window.state = state;
export default state