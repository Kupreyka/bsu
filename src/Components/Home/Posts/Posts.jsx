import style from "../Home.module.css";
import Post from "../Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utilities/validator";
import {Textarea} from "../../common/FormsControls";
import {Button} from "@material-ui/core";


const Posts = (props) => {
    let messageElement = props.state.messageData.map(el => <Post message={el.message}/>)

    let onPostSubmit = values => {
        props.AddPost(values.NewPost)
    }
    return (
        <div className={style.post}>
            <NewReduxPostForm onSubmit={onPostSubmit}/>
            {messageElement}
        </div>
    )
}

let MaxLength = maxLengthCreator(300)

let NewPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={style.postTextArea} component={Textarea} name={'NewPost'}
                   placeholder={'Что у Вас нового?'}
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