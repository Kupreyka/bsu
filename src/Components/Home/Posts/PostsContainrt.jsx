import React from "react";
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from './../../../redux/Profile-page-reducer'
import Posts from "./Posts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return{
        state: state.ProfilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        AddPost: () => {dispatch(AddPostActionCreator())},
        UpdateNewPostText: (text)=>{dispatch(UpdateNewPostTextActionCreator(text))}
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer