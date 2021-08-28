import style from "../Home.module.css";
import Post from "../Post/Post";

const Posts = () => {
    let messageData = [
        {message:'Hello'},
        {message:'How are you?'},
        {message:'Sorry'}
    ]

    let messageElement = messageData.map(el => <Post message={el.message}/>)

    return(
        <div className={style.post}>
            <textarea cols="50" rows="10" placeholder='Новый пост'></textarea>
            <button>Add Post</button>
            {messageElement}
        </div>
    )
}

export default Posts