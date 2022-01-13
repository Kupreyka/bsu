import style from './Message.module.css'
import {NavLink} from "react-router-dom";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls";
import {maxLengthCreator, required} from "../../utilities/validator";

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

    let MessageElement = props.state.MessageData.map(el => <Messages message={el.message}/>)

    let nameElement = props.state.nameData.map(el => <Name id={el.id} name={el.name}/>);

    let onMessageSubmit = (values) => {
        props.AddMessage(values.Message);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.name}>
                {nameElement}
            </div>
            <div className={style.message}>
                {MessageElement}
                <AddReduxMessageForm onSubmit={onMessageSubmit}/>
            </div>
        </div>
    )
}

let MaxLength = maxLengthCreator(10)

let AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} validate={[required, MaxLength ]} name={'Message'} placeholder={'Введите сообщение'} cols={'50'} rows={'10'}/>
            <button>Отправить</button>
        </form>
    )
}

const AddReduxMessageForm = reduxForm({
    form: 'AddMessage'
})(AddMessageForm)

export default Message