import React from "react";
import {connect} from "react-redux";

import {
    activePage,
    follow,
    requestUsers,
    toggleFollowingProgress,
    unfollow,
} from "../../redux/Friends-page-reducer";
import Friends from "./Friends";
import Preloader from "./Preloader/Preloader";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getActivePageUser,
    getFollowingInProgress,
    getIsFetching,
    getPageUser,
    getTotalCountUsers, getUsers
} from "../../redux/users-selectors";
import {Helmet} from "react-helmet";


class FriendsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.activePageUser, this.props.pageUser)
    };

    onPageChange = (activePageSucces) => {
        this.props.activePage(activePageSucces, this.props.activePageUser, this.props.pageUser)
    }

    render() {
        return (<div>
            <Helmet>
                <title>Друзья</title>
            </Helmet>
            {this.props.isFetching ? <Preloader/> : null } {/*<Preloader {...this.props}/>*/}
            <Friends {...this.props} onPageChange={this.onPageChange}/>
        </div>)
    }
}

let mapStateToProps = (state) => (
    {
        users: getUsers(state),
        totalCountUsers: getTotalCountUsers(state),
        pageUser: getPageUser(state),
        activePageUser: getActivePageUser(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
)


export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        toggleFollowingProgress,
        getUsers: requestUsers,
        activePage
    }),
    WithAuthRedirect
)(FriendsContainer)
