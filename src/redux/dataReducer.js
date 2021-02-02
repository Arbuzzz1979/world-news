import { FETCH_POSTS, INIT_POSTS } from "./types"

const initialState = {
    posts: [],
    topPost: [],
    mainPosts: [],
    latestNews: [],
}

export default function dataReducer (state = initialState, action) {


    switch (action.type) {
        case INIT_POSTS: {
            const [topPost,featuredPost1,featuredPost2,...latestNews] = action.payload
            return {...state, topPost:topPost, mainPosts: [featuredPost1,featuredPost2], latestNews:latestNews}
        }        
        case FETCH_POSTS: {
            const [topPost,featuredPost1,featuredPost2] = action.payload
            return {...state, topPost:topPost, mainPosts: [featuredPost1,featuredPost2]}
        }
        default: 
            return state
    }

}