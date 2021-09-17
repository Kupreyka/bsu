import React from "react";
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from './../../../redux/Profile-page-reducer'
import Posts from "./Posts";
import {connect} from "react-redux";

/*
const PostsContainer = (props) => {
    return (
        <StoreContext.Consumer>{(store) => {
            let state = store.getState().ProfilePage;
            let AddPost = () => {
                store.dispatch(AddPostActionCreator())
            }
            let onPostChange = (text) => {
                store.dispatch(UpdateNewPostTextActionCreator(text))
            }
            return (
                <Posts AddPost={AddPost} UpadateNewPostText={onPostChange} state={state}/>
            )
        }
        }
        </StoreContext.Consumer>
    )
}
*/

let mapStateToProps = (state) => {
    return{
        state: state.ProfilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        AddPost: () => {dispatch(AddPostActionCreator())},
        UpadateNewPostText: (text)=>{dispatch(UpdateNewPostTextActionCreator(text))}
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer