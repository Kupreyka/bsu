import {ProfileApi, UsersAPI} from "../API/Api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'profile/ADD-POST';
const UPDATE_NEW_POST_TEXT = 'profile/UPDATE-NEW-POST-TEXT';
const SET_PROFILE_PAGE = 'profile/SET_PROFILE_PAGE';
const SET_PROFILE_STATUS = 'profile/SET_PROFILE_STATUS';
const SAVE_PHOTO = 'profile/SAVE_PHOTO';
const ADD_LIKE = 'profile/ADD_LIKE'
const DELETE_LIKE = 'profile/DELETE_LIKE'



let initialState = {
    messageData: [],
    profile: null,
    status: ''
}

const ProfilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let stateCopy = {...state}
            stateCopy.messageData = [...state.messageData]
            stateCopy.messageData.push(
                {message: action.NewPost, like: false}
            );
            return stateCopy;
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
        case SAVE_PHOTO: {
            return {
                ...state, profile: {...state.profile, photos: action.photos}
            }
        }
        case ADD_LIKE: {
            let objIndex = state.messageData.findIndex((obj => obj.like == false))
            return {
                ...state, ...state.messageData[objIndex].like = true
            }
        }
        case DELETE_LIKE: {
            let objIndex = state.messageData.findIndex((obj => obj.like == true))
            return {
                ...state, ...state.messageData[objIndex].like = false
            }
        }
        default:
            return state
    }

}


export const addLike = () => ({type: ADD_LIKE})
export const deleteLike = () => ({type: DELETE_LIKE})


export const AddPostSuccess = (NewPost) => {
    return {type: ADD_POST, NewPost}
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

const savePhotoSuccess = (photos) => {
    return {type: SAVE_PHOTO, photos}
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

export const savePhoto = (file) => {
    return dispatch => {
        ProfileApi.savePhoto(file)
            .then(response => {
                if (response.data.resultCode === 0) {
                    let savePhoto = response.data.data.photos
                    dispatch(savePhotoSuccess(savePhoto))
                }
            })
    }
}

export const saveProfile = (profile) => {
    return (dispatch, getState) => {
        let userId = getState().Auth.id
        ProfileApi.saveProfileInfo(profile)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getUserId(userId))
                } else {
                    dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}));
                    //return Promise.reject(response.data.messages[0])
                }
            })
    }
}
export default ProfilePageReducer