import {FETCH_POSTS,NEW_POST} from './types'

export function fetchPosts(){
    return function(dispatch){
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res =>{
                if(res.ok){
                    res.json()
                    .then(data => {
                            dispatch({
                                type:FETCH_POSTS,
                                payload:data
                            })
                        })
                        } else {throw Error(`Request rejected with status ${res.status}`);}
                } )              
    }
}

export function createPost(postData) {
    
    return function(dispatch){
        fetch("https://jsonplaceholder.typicode.com/posts",{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(postData)
            })
            .then(res=>res.json())
            .then(post=>dispatch({
                type:NEW_POST,
                payload:post
            }))         
    }
}