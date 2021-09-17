import React from "react";
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from './../../../redux/Profile-page-reducer'
import Posts from "./Posts";
import StoreContext from "../../../StoreContext";

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

export default PostsContainer