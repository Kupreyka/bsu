import style from "../Home.module.css";
import Post from "../Post/Post";
import React from "react";

const Posts = (props) => {


    let messageElement = props.messageData.map(el => <Post message={el.message}/>)
    let NewPostElement = React.createRef();
    let AddPost = () => {
        let action = {type:'ADD-POST'}
        props.dispatch(action)
    }
    let onPostChange = () => {
        let text = NewPostElement.current.value;
        let action = {type:'UPDATE-NEW-POST-TEXT',newPostText: text};
        props.dispatch(action)
    }
    debugger
    return (
        <div className={style.post}>
            <textarea ref={NewPostElement} cols="50" rows="10" placeholder='Новый пост' value={props.NewPostText} onChange={onPostChange}></textarea>
            <button onClick={AddPost}>Add Post</button>
            {messageElement}
        </div>
    )
}

export default Posts