
import React from "react";
import {AddMessageActionCreator, AddNewMessageTextActionCreator} from "../../redux/Dialogs-page-reducer";
import Message from "./Message";


const MessageContainer = (props) => {
    let state = props.store.getState().DialogsPage
    let AddMessage = () => {
        props.store.dispatch(AddMessageActionCreator());
    }

    let onMessageChange = (message) => {
        props.store.dispatch(AddNewMessageTextActionCreator(message))
    }

    return (
        <Message AddMessage={AddMessage} UpdateMessageText={onMessageChange} state={state}/>
    )
}

export default MessageContainer