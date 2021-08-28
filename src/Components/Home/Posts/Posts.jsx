import style from "../Home.module.css";
import Post from "../Post/Post";

const Posts = (props) => {


    let messageElement = props.messageData.map(el => <Post message={el.message}/>)

    return (
        <div className={style.post}>
            <textarea cols="50" rows="10" placeholder='Новый пост'></textarea>
            <button>Add Post</button>
            {messageElement}
        </div>
    )
}

export default Posts