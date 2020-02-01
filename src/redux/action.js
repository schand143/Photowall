import { database } from '../database/config';

export function startAddingPost(post) {
  return dispatch => {
    return database
      .ref('posts')
      .update({ [post.id]: post })
      .then(() => {
        dispatch(addPost(post));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function startLoadingPost() {
  return dispatch => {
    return database
      .ref('posts')
      .once('value')
      .then(snapshot => {
        let posts = [];
        snapshot.forEach(childSnapshot => {
          posts.push(childSnapshot.val());
        });
        dispatch(loadPost(posts));
      });
  };
}

export function startRemovingPost(index, id) {
  return dispatch => {
    return database
      .ref(`posts/${id}`)
      .remove()
      .then(() => {
        dispatch(removePost(index));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function starAddingComment(comment, postId) {
  return dispatch => {
    return database
      .ref(`comments/${postId}`)
      .push(comment)
      .then(() => {
        dispatch(addComment(comment, postId));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function startLoadingComments() {
  return dispatch => {
    return database
      .ref('comments')
      .once('value')
      .then(snapshot => {
        let comments = {};

        snapshot.forEach(childSnapshot => {
          comments[childSnapshot.key] = Object.values(childSnapshot.val());
          console.log('data', comments);
        });
        dispatch(loadComments(comments));
      });
  };
}

export function loadComments(comments) {
  return {
    type: 'LOAD_COMMENTS',
    comments: comments
  };
}

export function removePost(index) {
  return {
    type: 'REMOVE_POST',
    index
  };
}

export function addPost(post) {
  return { type: 'ADD_POST', post };
}

export function addComment(comment, postId) {
  return {
    type: 'ADD_COMMENT',
    comment,
    postId
  };
}

export function loadPost(posts) {
  return {
    type: 'LOAD_POSTS',
    posts
  };
}

// adding post
