import style from './Message.module.css'
import {NavLink} from "react-router-dom";

const Name = (props) => {
    return(
        <NavLink to={'/message/'+ props.id}>{props.name}</NavLink>
    )
}

const Messages = (props) => {
    return(
        <div>{props.message}</div>
    )
}

const Message = (props) => {
    return(
        <div className={style.dialogs}>
            <div className={style.name}>
                <Name id='1' name='Kirill'/>
                <Name id='2' name='Svetlana'/>
                <Name id='3' name='Andrey'/>
                <Name id='4' name='Artem'/>
                <Name id='5' name='Alexey'/>
            </div>
            <div className={style.message}>
                <Messages message='Hello'/>
                <Messages message='How are you?'/>
                <Messages message='Sorry'/>
            </div>
        </div>
    )
}

export default Message