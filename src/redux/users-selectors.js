import {createSelector} from "reselect";

const getUsersSelector = state => {
    return state.FriendsPage.users
}
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
})


export const getTotalCountUsers = state => {
    return state.FriendsPage.totalCountUsers
}
export const getPageUser = state => {
    return state.FriendsPage.pageUser
}
export const getActivePageUser = state => {
    return state.FriendsPage.activePageUser
}
export const getIsFetching = state => {
    return state.FriendsPage.isFetching
}
export const getFollowingInProgress = state => {
    return state.FriendsPage.followingInProgress
}

