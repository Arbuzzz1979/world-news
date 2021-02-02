import { FETCH_POSTS, INIT_POSTS, CHANGE_SECTION } from "./types";
import { INIT_LANGUAGE } from './types'
import { SHOW_LOADER, HIDE_LOADER } from './types'

// import DataService from '../services/data-service'

// const data = new DataService()

// export function fetchPosts(url,category){
//     return async dispatch =>{
//         dispatch(showLoader())
//         dispatch(changeSection(category))        
//         const json = await data.getPosts(url,category)
//         dispatch({
//             type: FETCH_POSTS,
//             payload: json           
//         })
//         dispatch(hideLoader())
//     }
// }

// export function initLanguage(lng){
//     return async dispatch => {
//         dispatch(showLoader())
//         dispatch({
//             type: INIT_LANGUAGE,
//             payload: lng     
//         })
//         const json = await data.getPostsInitLanguage(lng)
//         dispatch({
//             type: INIT_POSTS,
//             payload: json           
//         })
//         dispatch(hideLoader())
//     }
// }



export function initLanguage(lng){
    return {
        type: INIT_LANGUAGE,
        payload: lng   
    }
}
export function changeSection(section) {
    return {
        type: CHANGE_SECTION,
        payload: section     
    }
}

export function showLoader(){
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader(){
    return {
        type: HIDE_LOADER
    }
}



// export function showRuNews(){
//     return {
//         type: SHOW_RU_NEWS
//     }
// }
// export function showUaNews(){
//     return {
//         type: SHOW_UA_NEWS
//     }
// }
// // export function fetchedPosts(){
// //     return async dispatch => {
//         dispatch(showLoader())
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limite=5')
//         const json = await response.json()
//         setTimeout(()=>{
//             dispatch({
//                 type: FETCH_POSTS,
//                 payload: json
//             })
//             dispatch(hideLoader())
//         }, 3000)
        
        
//     }
// }
