
import React from "react";
import {AddPostActionCreator,UpdateNewPostTextActionCreator } from './../../../redux/Profile-page-reducer'
import Posts from "./Posts";

const PostsContainer = (props) => {
    let state = props.store.getState().ProfilePage
    let AddPost = () => {
        props.store.dispatch(AddPostActionCreator())
    }
    let onPostChange = (text) => {
        props.store.dispatch(UpdateNewPostTextActionCreator(text))
    }
    return (
       <Posts AddPost={AddPost} UpadateNewPostText={onPostChange} state={state}/>
    )
}

export default PostsContainer