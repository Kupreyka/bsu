import style from "../Home.module.css";
import Post from "../Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator} from "../../../utilities/validator";
import {Textarea} from "../../common/FormsControls";
import {Button} from "@material-ui/core";


const Posts = (props) => {

    let messageElement = props.state.messageData.map(el => <Post addLike={props.addLike} deleteLike={props.deleteLike}
                                                                 like={el.like} message={el.message}/>)

    let onPostSubmit = values => {
        props.AddPostSuccess(values.NewPost)
    }
    return (
        <div className={style.post}>
            <NewReduxPostForm onSubmit={onPostSubmit} isOwner={props.isOwner}/>
            {messageElement}
        </div>
    )
}

let MaxLength = maxLengthCreator(300)

let NewPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={style.postTextArea} component={Textarea} name={'NewPost'}
                   placeholder={props.isOwner ? 'Что у Вас нового?' : 'Напишите что-нибудь...'}
            />
            <button>
                <Button variant="contained" component="span">
                    Опубликовать
                </Button>
            </button>
        </form>
    )
}

let NewReduxPostForm = reduxForm({
    form: 'NewPost'
})(NewPostForm)

export default Posts