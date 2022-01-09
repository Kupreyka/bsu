import React from "react";
import {connect} from "react-redux";

import {
    activePage,
    follow,
    getUsers,
    toggleFollowingProgress,
    unfollow,
} from "../../redux/Friends-page-reducer";
import Friends from "./Friends";
import Preloader from "./Preloader/Preloader";


class FriendsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.activePageUser, this.props.pageUser)
    };

    onPageChange = (activePageSucces) => {
        this.props.activePage(activePageSucces,this.props.activePageUser,this.props.pageUser)
    }

    render() {
        return (<div>
            <Preloader /*isFetching={this.props.isFetching}*/ {...this.props}/>
            <Friends {...this.props} onPageChange={this.onPageChange} />
        </div>)
    }
}

let mapStateToProps = (state) => (
    {
        users: state.FriendsPage.users,
        totalCountUsers: state.FriendsPage.totalCountUsers,
        pageUser: state.FriendsPage.pageUser,
        activePageUser: state.FriendsPage.activePageUser,
        isFetching: state.FriendsPage.isFetching,
        followingInProgress: state.FriendsPage.followingInProgress
    }
)

export default connect(mapStateToProps, {
    follow,
    unfollow,
    toggleFollowingProgress,
    getUsers,
    activePage
})(FriendsContainer);
