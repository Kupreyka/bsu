const ADD_MESSAGE = 'dialogs/ADD-MESSAGE';

let initialState = {
    MessageData: [
        {message: ''},
    ],
    nameData: [
        {id: 1, name: 'Kirill'}
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