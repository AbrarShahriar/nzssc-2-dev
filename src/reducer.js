export const initialState = {
    user: null,
    editorState: '',
    postTitle: '',
    postTopic: '',
    postTags: '',
    postCover: ''
}

export const reducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        
        case 'SET_EDITOR_STATE':
            return {
                ...state,
                editorState: action.editorState
            }
    
        default:
            return state
    }
}