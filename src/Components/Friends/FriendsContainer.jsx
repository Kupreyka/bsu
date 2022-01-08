import React from "react";
import {connect} from "react-redux";

import {
    follow, setActivePageUser, setTotalUsersCount, setUsers, toggleIsFetching, unfollow
} from "../../redux/Friends-page-reducer";
import Friends from "./Friends";
import Preloader from "./Preloader/Preloader";
import {UsersAPI} from "../../API/Api";


class FriendsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.toggleIsFetching(true)
        UsersAPI.getUser(this.props.activePageUser, this.props.pageUser)
            .then(response => {
                const users = response.items;
                this.props.setUsers(users);
                const totalUsers = response.totalCount;
                this.props.setTotalUsersCount(totalUsers)
                this.props.toggleIsFetching(false)

            })
    };

    onPageChange = (activePage) => {
        this.props.toggleIsFetching(true)
        this.props.setActivePageUser(activePage);
        UsersAPI.getUser(this.props.activePageUser, this.props.pageUser)
            .then(response => {
                const users = response.items;
                this.props.setUsers(users);
                this.props.toggleIsFetching(false)
            })
    }

    render() {
        return (<div>
            <Preloader /*isFetching={this.props.isFetching}*/ {...this.props}/>
            <Friends {...this.props} onPageChange={this.onPageChange}
                /*totalCountUsers={this.props.totalCountUsers}
                pageUser={this.props.pageUser}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                users={this.props.users}
                activePageUser={this.props.activePageUser}*/ />
        </div>)
    }
}

let mapStateToProps = (state) => (
    {
        users: state.FriendsPage.users,
        totalCountUsers: state.FriendsPage.totalCountUsers,
        pageUser: state.FriendsPage.pageUser,
        activePageUser: state.FriendsPage.activePageUser,
        isFetching: state.FriendsPage.isFetching
    }
)

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setActivePageUser,
    setTotalUsersCount,
    toggleIsFetching
})(FriendsContainer);
