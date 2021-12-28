import React from "react";
import {connect} from "react-redux";

import {
    followAC,
    setActivePageUserAC, setTotalPageCountAC,
    setUsersAC,
    unfollowAC
} from "../../redux/Friends-page-reducer";
import Friends from "./FriendsClass";


let mapDispatchToProps = (state) => {
    return {
        users: state.FriendsPage.users,
        totalCountUsers:state.FriendsPage.totalCountUsers,
        pageUser:state.FriendsPage.pageUser,
        activePageUser:state.FriendsPage.activePageUser,
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
        },
        setActivePageUser: (pageNumber)=>{
            dispatch(setActivePageUserAC(pageNumber))
        },
        setTotalUsersCount: (totalCount)=>{
            dispatch(setTotalPageCountAC(totalCount))
        }
    }
}


export default connect(mapDispatchToProps,mapStateToProps)(Friends);
