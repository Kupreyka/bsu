import style from "../Home.module.css";
import Post from "../Post/Post";
import React from "react";


const Posts = (props) => {
    let messageElement = props.state.messageData.map(el => <Post message={el.message}/>)
    let NewPostElement = React.createRef();
    let AddPost = () => {
        props.AddPost()
    }
    let onPostChange = () => {
        let text = NewPostElement.current.value;
        props.UpdateNewPostText(text)
    }
    return (
        <div className={style.post}>
            <textarea ref={NewPostElement} cols="50" rows="10" placeholder='Новый пост' value={props.state.NewPostText} onChange={onPostChange}></textarea>
            <button onClick={AddPost}>Add Post</button>
            {messageElement}
        </div>
    )
}

export default Posts