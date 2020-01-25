import _posts from '../data/posts';

const postReducer = function posts(state = _posts, action) {
  console.log('action:', action.index);

  switch (action.type) {
    case 'REMOVE_POST':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }

  return state;
};

export default postReducer;
