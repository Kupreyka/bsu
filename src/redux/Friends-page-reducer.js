import {UsersAPI} from "../API/Api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const ACTIVE_PAGE_USER = 'ACTIVE_PAGE_USER';
const SET_TOTAL_COUNT_USERS = 'SET_TOTAL_COUNT_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    totalCountUsers: 0,
    pageUser: 10,
    activePageUser: 1,
    isFetching: false,
    followingInProgress: []
}


const FriendsReducer = (state = initialState, action) => {


    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case ACTIVE_PAGE_USER:
            return {
                ...state,
                activePageUser: action.activePageUser
            }
        case SET_TOTAL_COUNT_USERS:
            return {
                ...state,
                totalCountUsers: action.totalCountUsers
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}
const followSucces = (userId) => ({type: FOLLOW, userId});
const unfollowSucces = (userId) => ({type: UNFOLLOW, userId});
const setUsers = (users) => ({type: SET_USERS, users});
const setActivePageUser = (activePageUser) => ({type: ACTIVE_PAGE_USER, activePageUser});
const setTotalUsersCount = (totalCountUsers) => ({type: SET_TOTAL_COUNT_USERS, totalCountUsers});
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})


export const requestUsers = (activePageUser, pageUser) => {
    return (dispatch) => {

        dispatch(toggleIsFetching(true))
        UsersAPI.getUser(activePageUser, pageUser)
            .then(response => {
                const users = response.items;
                dispatch(setUsers(users));
                const totalUsers = response.totalCount;
                dispatch(setTotalUsersCount(totalUsers))
                dispatch(toggleIsFetching(false))

            })
    }
}

export const activePage = (activePageSucces, activePageUser, pageUser) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setActivePageUser(activePageSucces));
        UsersAPI.getUser(activePageUser, pageUser)
            .then(response => {
                const users = response.items;
                dispatch(setUsers(users));
                dispatch(toggleIsFetching(false))
            })
    }
}


export const follow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id))
        UsersAPI.follow(id)
            .then(response => {
                if (response.resultCode == 0) {
                    dispatch(followSucces(id))
                }
                dispatch(toggleFollowingProgress(false, id))
            })
    }
}
export const unfollow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id))
        UsersAPI.unfollow(id)
            .then(response => {
                if (response.resultCode == 0) {
                    dispatch(unfollowSucces(id))
                }
                dispatch(toggleFollowingProgress(false, id))
            })
    }
}


export default FriendsReducer;