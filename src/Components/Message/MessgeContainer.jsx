import React from "react";
import {AddMessageActionCreator, AddNewMessageTextActionCreator} from "../../redux/Dialogs-page-reducer";
import Message from "./Message";
import StoreContext from "../../StoreContext";


const MessageContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {(store)=>{
                let state = store.getState().DialogsPage
                let AddMessage = () => {
                    store.dispatch(AddMessageActionCreator());
                }

                let onMessageChange = (message) => {
                    store.dispatch(AddNewMessageTextActionCreator(message))
                }
                return(<Message AddMessage={AddMessage} UpdateMessageText={onMessageChange} state={state}/>)
            }}
        </StoreContext.Consumer>
    )
}

export default MessageContainer