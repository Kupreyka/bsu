const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    messageData: [
        {message: 'Hello'},
        {message: 'How are you?'},
        {message: 'Sorry'}
    ],
    NewPostText: ''
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
export default ProfilePageReducer