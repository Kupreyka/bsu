import React from "react";
import { AddPostSuccess } from './../../../redux/Profile-page-reducer'
import Posts from "./Posts";
import {connect} from "react-redux";

class PostsContainer extends React.Component {

    render() {
        return <Posts state={this.props.state} AddPostSuccess={this.props.AddPostSuccess} isOwner={this.props.isOwner}/>
    }
}

let mapStateToProps = (state) => {
    return{
        state: state.ProfilePage
    }
}


export default  connect(mapStateToProps, {AddPostSuccess})(PostsContainer)
