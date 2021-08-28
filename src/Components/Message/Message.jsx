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
    let nameData = [
        {id:1, name:'Kirill'},
        {id:2, name:'Svetlana'},
        {id:3, name:'Andrey'},
        {id:4, name:'Artem'},
        {id:5, name:'Alexey'}
    ]
    return (
        <div className={style.dialogs}>
            <div className={style.name}>
                <Name id={nameData[0].id} name={nameData[0].name}/>
                <Name id={nameData[1].id} name={nameData[1].name}/>
                <Name id={nameData[2].id} name={nameData[2].name}/>
                <Name id={nameData[3].id} name={nameData[3].name}/>
                <Name id={nameData[4].id} name={nameData[4].name}/>
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