import _posts from '../data/posts';
import { combineReducers } from 'redux';

function comments(state = [], action) {
  // console.log('comment reducer');

  switch (action.type) {
    case 'ADD_COMMENT':
      // console.log(action.postId);
      // return [...state, action.comment];

      if (!state[action.postId]) {
        return { ...state, [action.postId]: [action.comment] };
      } else {
        return {
          ...state,
          [action.postId]: [...state[action.postId], action.comment]
        };
      }
    default:
      return state;
  }
  return state;
}

function posts(state = _posts, action) {
  // console.log('post reduces');
  console.log('action:', action.index);

  switch (action.type) {
    case 'REMOVE_POST':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];

    case 'ADD_POST':
      return [...state, action.post];
    case 'LOAD_POSTS':
      return action.posts;
    case 'LOAD_COMMENTS':
      return action.comments;
    default:
      return state;
  }

  return state;
}

const rootReducer = combineReducers({ posts, comments });

export default rootReducer;
