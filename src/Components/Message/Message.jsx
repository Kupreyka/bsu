import style from './Message.module.css'
import {NavLink} from "react-router-dom";
import React from "react";
import {AddMessageActionCreator, AddNewMessageTextActionCreator} from "../../redux/state";

const Name = (props) => {
    return (
        <NavLink to={'/message/' + props.id}>{props.name}</NavLink>
    )
}

const Messages = (props) => {
    return (
        <div>{props.message}</div>
    )
}

const Message = (props) => {

    let MessageElement = props.DialogsPage.MessageData.map(el => <Messages message={el.message}/>)

    let nameElement = props.DialogsPage.nameData.map(el => <Name id={el.id} name={el.name}/>);

    let MessageRef = React.createRef()
    let AddMessage = () => {
        props.dispatch(AddMessageActionCreator());
    }

    let onMessageChange = () => {
        let message = MessageRef.current.value;
        props.dispatch(AddNewMessageTextActionCreator(message))
    }

    return (
        <div className={style.dialogs}>
            <div className={style.name}>
                {nameElement}
            </div>
            <div className={style.message}>
                {MessageElement}
                <textarea ref={MessageRef} cols="50" rows="10" placeholder='Введите сообщение' value={props.DialogsPage.NewMessageText} onChange={onMessageChange}></textarea>
                <button onClick={AddMessage}>Add message</button>
            </div>
        </div>
    )
}

export default Message