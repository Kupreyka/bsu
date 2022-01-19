import ProfilePageReducer, {AddPostActionCreator} from "./Profile-page-reducer";

let state = {
    messageData: [],
    profile: null,
    status: ''
}

test('new post should be added', () => {
    let action = AddPostActionCreator('test')
    let newState = ProfilePageReducer(state,action)
    expect(newState.messageData.length).toBe(1)
});
