import {Rerender} from "../Render";



let state = {
    ProfilePage: {
        messageData: [
            {message: 'Hello'},
            {message: 'How are you?'},
            {message: 'Sorry'}
        ],
        NewPostText:'Kupreyka'
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
        ]
    }
}

export let AddPost = () => {
    state.ProfilePage.messageData.push(
        {message: state.ProfilePage.NewPostText}
    );
    Rerender(state)
}

export let UpdateNewPostText = (newPostText) => {
    state.ProfilePage.NewPostText = newPostText
    Rerender(state)
}

export let AddMessage = (newMessage) => {
    state.DialogsPage.MessageData.push(
        {message: newMessage}
    );
    Rerender(state)
}
window.state = state;
export default state