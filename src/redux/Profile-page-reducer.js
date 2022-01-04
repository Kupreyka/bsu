const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE_PAGE = 'SET_PROFILE_PAGE';


let initialState = {
    messageData: [
        {message: 'Hello'},
        {message: 'How are you?'},
        {message: 'Sorry'}
    ],
    NewPostText: '',
    profile: null
}

const ProfilePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:{
            let stateCopy = {...state}
            stateCopy.messageData = [...state.messageData]
            stateCopy.messageData.push(
                {message: state.NewPostText}
            );
            stateCopy.NewPostText = ''
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:{
            let stateCopy = {...state}
            stateCopy.NewPostText = action.newPostText
            return stateCopy
        }
        case SET_PROFILE_PAGE:{
            return {
                ...state, profile: action.profile
            }
        }
        default:
            return state
    }

}
export const AddPostActionCreator = () => {
    return{type:ADD_POST}
}
export const UpdateNewPostTextActionCreator =(text) => {
    return {type:UPDATE_NEW_POST_TEXT,newPostText: text}
}

export const setProfile = (profile) => {
  return {type:SET_PROFILE_PAGE, profile}
}
export default ProfilePageReducer