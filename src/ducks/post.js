import axios from 'axios';

//Types
export const LOAD_INITIAL_POSTS = "post_it/post/LOAD_INITIAL_POSTS"
export const LOAD_INITIAL_POSTS_SUCCESS = "post_it/post/LOAD_INITIAL_POSTS_SUCCESS"
export const LOAD_INITIAL_POSTS_FAILURE = "post_it/post/LOAD_INITIAL_POSTS_FAILURE"
export const CREATE_NEW_POST = "post_it/post/CREATE_NEW_POST"
export const CREATE_NEW_POST_SUCCESS = "post_it/post/CREATE_NEW_POST_SUCCESS"
export const CREATE_NEW_POST_FAILURE = "post_it/post/CREATE_NEW_POST_FAILURE"
export const DELETE_POST = "post_it/post/DELETE_POST"
export const DELETE_POST_SUCCESS = "post_it/post/DELETE_POST_SUCCESS"
export const DELETE_POST_FAILURE = "post_it/post/DELETE_POST_FAILURE"


//Initial
const INITIAL_STATE = {
    posts: [{
        "id": "",
        "title": "",
        "content": ""
    }],
    error_message : ""
};

//Reducers
export default function reducer(state = INITIAL_STATE, action){
    switch(action.type){
        case LOAD_INITIAL_POSTS:
        case LOAD_INITIAL_POSTS_SUCCESS:
            return{
                ...state,
                posts: action.payload,
            }
        case LOAD_INITIAL_POSTS_FAILURE:
            return{
                ...state,
                error_message: "Could not load initial posts"
            }
        case CREATE_NEW_POST:
        case CREATE_NEW_POST_SUCCESS:
            return{
                ...state,
                posts: [...state.posts, action.payload],
            }
        case CREATE_NEW_POST_FAILURE:
            return{
                ...state,
                error_message: "Could not create post"
            }
        case DELETE_POST:
        case DELETE_POST_SUCCESS:
            return{
                ...state,
                posts: state.posts.filter(post => post.id != action.payload)
            }
        case DELETE_POST_FAILURE:
        return{
            ...state,
            error_message: "Could not delete post"
        }
        //this is very important to have!
        default: {
            return {
                ...state
            }
        }
    }
};

//Actions
export const load_initial_posts = () =>{
    return dispatch => {
        dispatch({
            type: LOAD_INITIAL_POSTS
        })
        axios.get('http://localhost:8080/posts')
            .then(res=>{
                dispatch(load_initial_posts_success(res.data))
            })
            .catch(err=>{
                dispatch(load_initial_posts_failure(err.message))
            })
    }
};

const load_initial_posts_success = (posts) => (
    {
        type: LOAD_INITIAL_POSTS_SUCCESS,
        payload: posts
    }
);

const load_initial_posts_failure = (error) => (
    {
        type: LOAD_INITIAL_POSTS_SUCCESS,
        payload:   error
    }
);

export const create_new_post = (title, content) =>{
    return dispatch =>{
        dispatch({
            type: CREATE_NEW_POST
        })
        axios.post('http://localhost:8080/createpost',{
            "title": title,
            "content": content})
            .then(res=>{
                dispatch(create_new_post_success(res.data))
            })
            .catch(err => {
                dispatch(create_new_post_failure(err.message))
            })  
    }
}

const create_new_post_success = (data) => ({
    type: CREATE_NEW_POST_SUCCESS,
    payload: data
})

const create_new_post_failure = (error) => (
    {
        type: CREATE_NEW_POST_FAILURE,
        payload: error
    }
)

export const delete_post = (id) => {
    return dispatch => {
        dispatch({
            type: DELETE_POST
        })
        axios.post('http://localhost:8080/deletepost', {"id": id})
        .then(
            res => {
                dispatch(delete_post_success(id))
            }
        )
        .catch(
            err => (
                dispatch(delete_post_failure(err.message))
            )
        );
    }
}


const delete_post_success = (id) => ({
    type: DELETE_POST_SUCCESS,
    payload: id
})

const delete_post_failure = (error) => (
    {
        type: DELETE_POST_FAILURE,
        payload: error
    }
)
