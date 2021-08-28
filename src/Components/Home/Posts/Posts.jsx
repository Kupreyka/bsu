import style from "../Home.module.css";
import Post from "../Post/Post";

const Posts = (props) => {
    return(
        <div className={style.post}>
            <textarea name="" id="" cols="50" rows="10" placeholder='Новый пост'></textarea>
            <button>Add Post</button>
            <Post message='Hello'/>
            <Post message='How are you?'/>
            <Post message='Sorry'/>
        </div>
    )
}

export default Posts