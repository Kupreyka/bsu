import React from "react";
import {connect} from "react-redux";

import {
    follow, setActivePageUser, setTotalUsersCount, setUsers, toggleIsFetching, unfollow
} from "../../redux/Friends-page-reducer";
import Friends from "./Friends";
import axios from "axios";
import Preloader from "./Preloader/Preloader";


class FriendsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePageUser}&count=${this.props.pageUser}`,{
            withCredentials:true
        })
            .then(res => {
                const users = res.data.items;
                this.props.setUsers(users);
                const totalUsers = res.data.totalCount;
                this.props.setTotalUsersCount(totalUsers)
                this.props.toggleIsFetching(false)

            })
    };

    onPageChange = (activePage) => {
        this.props.toggleIsFetching(true)
        this.props.setActivePageUser(activePage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${activePage}&count=${this.props.pageUser}`,{
            withCredentials: true
        })
            .then(res => {
                const users = res.data.items;
                this.props.setUsers(users);
                this.props.toggleIsFetching(false)
            })
    }

    render() {
        return (<div>
            <Preloader isFetching={this.props.isFetching}/>
            <Friends
                totalCountUsers={this.props.totalCountUsers}
                pageUser={this.props.pageUser}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                users={this.props.users}
                activePageUser={this.props.activePageUser}
                onPageChange={this.onPageChange}
            />
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
