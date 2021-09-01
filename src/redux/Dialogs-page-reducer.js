const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT';

const DialogsPageReducer = (state, action) => {

    let _AddMessage = () => {
        state.MessageData.push(
            {message: state.NewMessageText}
        );
        state.NewMessageText = '';
    }
    let _AddNewMessageText = (newMessage) => {
        state.NewMessageText = newMessage;
    }


    switch (action.type) {
        case  ADD_MESSAGE :
            _AddMessage()
            break
        case  ADD_NEW_MESSAGE_TEXT:
            _AddNewMessageText(action.newMessage)
            break
        default:
            return state
    }
    return state;
}

export default DialogsPageReducer