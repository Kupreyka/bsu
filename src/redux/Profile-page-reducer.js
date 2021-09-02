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
    let updateNewPostText = (newPostText) => {
        state.NewPostText = newPostText
    }
    let addPost = () => {
        state.messageData.push(
            {message: state.NewPostText}
        );
        state.NewPostText = ''
    }

    switch (action.type) {
        case ADD_POST:
            addPost()
            return state;
        case UPDATE_NEW_POST_TEXT:
            updateNewPostText(action.newPostText)
            return state;
        default:
            return state
    }

    return state;
}
export const AddPostActionCreator = () => {
    return{type:ADD_POST}
}
export const UpdateNewPostTextActionCreator =(text) => {
    return {type:UPDATE_NEW_POST_TEXT,newPostText: text}
}
export default ProfilePageReducer