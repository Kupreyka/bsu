import style from "../Home.module.css";
import Post from "../Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";


const Posts = (props) => {
    let messageElement = props.state.messageData.map(el => <Post message={el.message}/>)

    let onPostSubmit = values => {
        props.AddPost(values.NewPost)
    }
    return (
        <div className={style.post}>
            {/*<textarea ref={NewPostElement} cols="50" rows="10" placeholder='Новый пост' value={props.state.NewPostText} onChange={onPostChange}></textarea>
            <button onClick={AddPost}>Add Post</button>*/}
            <NewReduxPostForm onSubmit={onPostSubmit}/>
            {messageElement}
        </div>
    )
}

let NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'NewPost'} placeholder={'Новый пост'}/>
            <button>AddPost</button>
        </form>
    )
}

let NewReduxPostForm = reduxForm({
    form: 'NewPost'
})(NewPostForm)

export default Posts