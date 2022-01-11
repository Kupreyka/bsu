import {ProfileApi, UsersAPI} from "../API/Api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE_PAGE = 'SET_PROFILE_PAGE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';


let initialState = {
    messageData: [
        {message: 'Hello'},
        {message: 'How are you?'},
        {message: 'Sorry'}
    ],
    NewPostText: '',
    profile: null,
    status: ''
}

const ProfilePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let stateCopy = {...state}
            stateCopy.messageData = [...state.messageData]
            stateCopy.messageData.push(
                {message: state.NewPostText}
            );
            stateCopy.NewPostText = ''
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.NewPostText = action.newPostText
            return stateCopy
        }
        case SET_PROFILE_PAGE: {
            return {
                ...state, profile: action.profile
            }
        }
        case SET_PROFILE_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        default:
            return state
    }

}
export const AddPostActionCreator = () => {
    return {type: ADD_POST}
}
export const UpdateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newPostText: text}
}

export const setProfile = (profile) => {
    return {type: SET_PROFILE_PAGE, profile}
}

const setProfileStatus = (status) => {
    return {type: SET_PROFILE_STATUS, status}
}


export const getUserId = (UserId) => {
    return (dispatch) => {
        UsersAPI.getUserId(UserId)
            .then(response => {
                const profile = response;
                dispatch(setProfile(profile))
            })
    }
}

export const getStatus = (userId) => {
    return dispatch => {
        ProfileApi.getStatus(userId)
            .then(response => {
                dispatch(setProfileStatus(response.data))
            })
    }
}

export const updateProfileStatus = (status) => {
    return dispatch => {
        ProfileApi.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setProfileStatus(status))
                }
            })
    }
}

export default ProfilePageReducer