import style from './Message.module.css'

const Message = () => {
    return(
        <div className={style.dialogs}>
            <div className={style.name}>
                <div>Kirill</div>
                <div>Sveta</div>
                <div>Andrey</div>
                <div>Artem</div>
                <div>Natali</div>
            </div>
            <div className={style.message}>
                <div>Hello</div>
                <div>How are you?</div>
                <div>Sorry</div>
            </div>
        </div>
    )
}

export default Message