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
    news: [],
    loading: {
        auth: true,
        news: true,
        articles: true,
        bookReview: true,
        members: true
    }
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

            case 'SET_LOADING/AUTH':
                return {
                    ...state,
                    loading: {
                        ...state.loading,
                        auth: action.loading.auth
                    }
                }
            case 'SET_LOADING/ARTICLES':
                return {
                    ...state,
                    loading: {
                        ...state.loading,
                        articles: action.loading.articles
                    }
                }
            case 'SET_LOADING/NEWS':
                return {
                    ...state,
                    loading: {
                        ...state.loading,
                        news: action.loading.news
                    }
                }
            case 'SET_LOADING/BOOKREVIEW':
                return {
                    ...state,
                    loading: {
                        ...state.loading,
                        bookReview: action.loading.bookReview
                    }
                }
            case 'SET_LOADING/MEMBERS':
                return {
                    ...state,
                    loading: {
                        ...state.loading,
                        members: action.loading.members
                    }
                }
    
        default:
            return state
    }
}