import React from "react";
import {AddMessageActionCreator, AddNewMessageTextActionCreator} from "../../redux/Dialogs-page-reducer";
import Message from "./Message";
import {connect} from "react-redux";


/*const MessageContainer = (props) => {

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
}*/

let mapStateToProps = (state) => {
    return {
        state: state.DialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        AddMessage: () => {dispatch(AddMessageActionCreator())},
        UpdateMessageText: (message)=>{dispatch(AddNewMessageTextActionCreator(message))}
    }
}


const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message)


export default MessageContainer