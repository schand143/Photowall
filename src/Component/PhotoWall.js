import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';

function PhotoWall(props) {
  return (
    <div>
      <a onClick={props.onNavigate} href='#AddPhoto' className='addIcon'></a>
      {/* <button onClick={props.onNavigate} className='addIcon'></button> */}
      <div className='photoGrid'>
        {props.posts.map((post, index) => (
          <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />
        ))}
      </div>
    </div>
  );
}

PhotoWall.prototype = {
  post: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired
};

export default PhotoWall;
