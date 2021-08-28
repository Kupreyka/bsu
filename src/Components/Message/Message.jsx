import style from './Message.module.css'
import {NavLink} from "react-router-dom";

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

    return (
        <div className={style.dialogs}>
            <div className={style.name}>
                {nameElement}
            </div>
            <div className={style.message}>
                {MessageElement}
            </div>
        </div>
    )
}

export default Message