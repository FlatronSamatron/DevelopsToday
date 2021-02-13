import axios from "axios"
import { Dispatch } from "react"
import { PostAction, PostActionTypes } from "../types/post"


export const fetchUsers = () => {
    return async (dispatch: Dispatch<PostAction>) => {
        try{
            dispatch({type: PostActionTypes.FETCH_POSTS})

            const res = await axios.get('https://simple-blog-api.crew.red/posts')
            dispatch({type: PostActionTypes.FETCH_POSTS_SUCCESS, payload: res.data})
        }catch(e){
            dispatch({type: PostActionTypes.FETCH_POSTS_ERROR, 
            payload: 'there was an error loading posts'})
        }
    }
}