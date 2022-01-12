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
        AddPost: (NewPost) => {dispatch(AddPostActionCreator(NewPost))},
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer