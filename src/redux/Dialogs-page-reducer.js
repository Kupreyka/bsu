const ADD_MESSAGE = 'ADD-MESSAGE';

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
    ]
}

const DialogsPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case  ADD_MESSAGE : {
            let stateCopy = {...state}
            stateCopy.MessageData = [...state.MessageData]
            stateCopy.MessageData.push(
                {message: action.Message}
            );
            return stateCopy
        }
        default:
            return state
    }
}
export const AddMessageActionCreator = (Message) => {
    return {type: ADD_MESSAGE, Message}
}

export default DialogsPageReducer