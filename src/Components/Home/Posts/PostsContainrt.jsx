import React from "react";
import {addLike, AddPostSuccess, deleteLike} from './../../../redux/Profile-page-reducer'
import Posts from "./Posts";
import {connect} from "react-redux";

class PostsContainer extends React.Component {

    render() {
        return <Posts state={this.props.state} addLike={this.props.addLike} deleteLike={this.props.deleteLike}
                      AddPostSuccess={this.props.AddPostSuccess} isOwner={this.props.isOwner}/>
    }
}

let mapStateToProps = (state) => {
    return {
        state: state.ProfilePage
    }
}


export default connect(mapStateToProps, {AddPostSuccess, addLike, deleteLike})(PostsContainer)
