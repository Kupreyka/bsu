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

const Message = () => {
    let nameData = [
        {id: 1, name: 'Kirill'},
        {id: 2, name: 'Svetlana'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'Artem'},
        {id: 5, name: 'Alexey'}
    ]

    let MessageData = [
        {message: 'Hello'},
        {message: 'How are you?'},
        {message: 'Goodbye'}
    ]

    let MessageElement = MessageData.map(el => <Messages message={el.message}/>)


    let nameElement = nameData.map(el => <Name id={el.id} name={el.name}/>);


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