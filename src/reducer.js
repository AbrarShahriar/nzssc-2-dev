export const initialState = {
    user: null,
    postDataDraft: JSON.parse(localStorage.getItem('postDataDraft')) || {
        title: '',
        topic: 'article',
        cover: '',
        body: '',
    },
    articles: [],
    bookReviews: [],
    news: []
}

export const reducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        
        case 'SET_POST-DATA_DRAFT':
            localStorage.setItem('postDataDraft', JSON.stringify(action.postDataDraft))
            return {
                ...state,
                postDataDraft: action.postDataDraft
            }

            case 'SET_ARTICLES':
                return {
                    ...state,
                    articles: action.articles
                }

            case 'SET_BOOKREVIEWS':
                return {
                    ...state,
                    bookReviews: action.bookReviews
                }

            case 'SET_NEWS':
                return {
                    ...state,
                    news: action.news
                }
    
        default:
            return state
    }
}