import style from "../Home.module.css";
import Post from "../Post/Post";
import React from "react";

const Posts = (props) => {


    let messageElement = props.messageData.map(el => <Post message={el.message}/>)
    let NewPostElement = React.createRef();
    let AddPost = () => {
        let text = NewPostElement.current.value;
        props.addPost(text)
        NewPostElement.current.value = '';
    }

    return (
        <div className={style.post}>
            <textarea ref={NewPostElement} cols="50" rows="10" placeholder='Новый пост'></textarea>
            <button onClick={AddPost}>Add Post</button>
            {messageElement}
        </div>
    )
}

export default Posts