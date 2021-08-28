let state = {
    ProfilePage: {
        messageData: [
            {message: 'Hello'},
            {message: 'How are you?'},
            {message: 'Sorry'}
        ]
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

export let AddPost = (postElement) => {
    state.ProfilePage.messageData.push(
        {message: postElement}
    )
}

export let AddMessage = (newMessage) => {
    state.DialogsPage.MessageData.push(
        {message: newMessage}
    )
}

export default state