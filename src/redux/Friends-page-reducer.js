const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const ACTIVE_PAGE_USER = 'ACTIVE_PAGE_USER';
const SET_TOTAL_COUNT_USERS = 'SET_TOTAL_COUNT_USERS';

let initialState = {
    users:[ ],
    totalCountUsers:0,
    pageUser:10,
    activePageUser:1
}


const friendsReducer = (state = initialState, action) => {


    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId){
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId){
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
                totalCountUsers:action.totalCountUsers
            }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users });
export const setActivePageUserAC = (activePageUser) => ({type: ACTIVE_PAGE_USER, activePageUser  });
export const setTotalPageCountAC = (totalCountUsers) => ({type: SET_TOTAL_COUNT_USERS, totalCountUsers})

export default friendsReducer;