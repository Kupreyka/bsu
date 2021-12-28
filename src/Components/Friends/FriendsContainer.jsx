import React from "react";
import {connect} from "react-redux";

import {followAC, setUsersAC, unfollowAC} from "../../redux/Friends-page-reducer";
import Friends from "./FriendsClass";


let mapDispatchToProps = (state) => {
    return {
        users: state.FriendsPage.users
    }
}

let mapStateToProps = (dispatch) => {
    return {
        follow: (userId)=>{
            dispatch(followAC(userId));
        },
        unfollow: (userId)=>{
            dispatch(unfollowAC(userId));
        },
        setUsers: (users)=>{
            dispatch(setUsersAC(users))
        }
    }
}


export default connect(mapDispatchToProps,mapStateToProps)(Friends);
