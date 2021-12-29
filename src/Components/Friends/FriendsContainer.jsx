import React from "react";
import {connect} from "react-redux";

import {
    followAC,
    setActivePageUserAC, setTotalPageCountAC,
    setUsersAC,
    unfollowAC
} from "../../redux/Friends-page-reducer";
import Friends from "./Friends";
import axios from "axios";


class FriendsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePageUser}&count=${this.props.pageUser}`)
            .then(res => {
                const users = res.data.items;
                this.props.setUsers(users);
                const totalUsers = res.data.totalCount;
                this.props.setTotalUsersCount(totalUsers)

            })
    };

    onPageChange = (activePage) => {
        this.props.setActivePageUser(activePage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${activePage}&count=${this.props.pageUser}`)
            .then(res => {
                const users = res.data.items;
                this.props.setUsers(users)
            })
    }

    render() {
        return <Friends
            totalCountUsers={this.props.totalCountUsers}
            pageUser={this.props.pageUser}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            users={this.props.users}
            activePageUser={this.props.activePageUser}
            onPageChange={this.onPageChange}
        />
    }
}

let mapDispatchToProps = (state) => {
    return {
        users: state.FriendsPage.users,
        totalCountUsers: state.FriendsPage.totalCountUsers,
        pageUser: state.FriendsPage.pageUser,
        activePageUser: state.FriendsPage.activePageUser,
    }
}

let mapStateToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setActivePageUser: (pageNumber) => {
            dispatch(setActivePageUserAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalPageCountAC(totalCount))
        }
    }
}


export default connect(mapDispatchToProps, mapStateToProps)(FriendsContainer);
