import React from "react";
import {AddMessageActionCreator, AddNewMessageTextActionCreator} from "../../redux/Dialogs-page-reducer";
import Message from "./Message";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        state: state.DialogsPage,
        isAuth: state.Auth.isAuth
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