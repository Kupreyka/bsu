import React from "react";
import {AddMessageActionCreator, AddNewMessageTextActionCreator} from "../../redux/Dialogs-page-reducer";
import Message from "./Message";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


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


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Message)

