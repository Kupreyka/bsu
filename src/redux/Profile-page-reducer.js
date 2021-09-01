const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ProfilePageReducer = (state, action) => {
    let _updateNewPostText = (newPostText) => {
        state.NewPostText = newPostText
    }
    let _addPost = () => {
        state.messageData.push(
            {message: state.NewPostText}
        );
        state.NewPostText = ''
    }

    switch (action.type) {
        case ADD_POST:
            _addPost()
            break
        case UPDATE_NEW_POST_TEXT:
            _updateNewPostText(action.newPostText)
            break
        default:
            return state
    }

    return state;
}

export default ProfilePageReducer