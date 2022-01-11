const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT';


let initialState = {
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

const DialogsPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case  ADD_MESSAGE : {
            let stateCopy = {...state}
            stateCopy.MessageData = [...state.MessageData]
            stateCopy.MessageData.push(
                {message: state.NewMessageText}
            );
            stateCopy.NewMessageText = '';
            return stateCopy
        }
        case  ADD_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state}
            stateCopy.NewMessageText = action.newMessage;
            return stateCopy
        }
        default:
            return state
    }
}
export const AddMessageActionCreator = () => {
    return {type: ADD_MESSAGE}
}
export const AddNewMessageTextActionCreator = (message) => {
    return {type: ADD_NEW_MESSAGE_TEXT, newMessage: message}
}


export default DialogsPageReducer