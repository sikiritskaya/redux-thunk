import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import {CREATION_POST_FAILURE, CREATION_POST_STARTED, CREATION_POST_SUCCESS} from "./actions/addPostAction";
import { GET_POSTS_FAILURE, GET_POSTS_STARTED, GET_POSTS_SUCCESS } from "./actions/getPostsAction";
import { GET_USERS_FAILURE, GET_USERS_STARTED, GET_USERS_SUCCESS } from "./actions/getUsersAction";

//const GET_USERS = "GET_USERS";
//const GET_POSTS = "GET_POSTS";
//const CREATION_POST = "CREATION_POST";
const DELETE_POST = "DELETE_POST";

const initialState = {
  loading: false,
  error: null,
  posts: [],
  users: [],
};

const reducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    /* case GET_USERS:
      return {
        ...state,
        users: action.users,
      }; */
      case GET_USERS_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          users: action.users
        };
      case GET_USERS_STARTED:
        return {
          ...state,
          loading: true
        }
      case GET_USERS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error
      };
    /* case GET_POSTS:
      return {
        ...state,
        posts: action.posts,
      }; */
      case GET_POSTS_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          posts: action.posts
        };
      case GET_POSTS_STARTED:
        return {
          ...state,
          loading: true
        }
      case GET_POSTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error
      };
   /*  case CREATION_POST:
      return {
        ...state,
        posts: [...state.posts, action.post],
      }; */
      case CREATION_POST_STARTED:
      return {
        ...state,
        loading: true
      };
    case CREATION_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        posts: [...state.posts, action.payload]
      };
    case CREATION_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case DELETE_POST:
      const itemIndex = state.posts.findIndex((item) => item.id === action.id);

      return {
        ...state,
        posts: [
          ...state.posts.slice(0, itemIndex),
          ...state.posts.slice(itemIndex + 1),
        ],
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

//const setUsers = (users) => ({ type: GET_USERS, users });

//const setPosts = (posts) => ({ type: GET_POSTS, posts });

//const createPost = (post) => ({ type: CREATION_POST, post });

const deletePost = (id) => ({ type: DELETE_POST, id });

/* const setPostsThunk = () => {
  return (dispatch) => {
    getPosts.then((posts) => dispatch(setPosts(posts)));
  };
}; */

export { deletePost };

export default store;
