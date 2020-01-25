import React, { Component } from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import { Route, Link } from 'react-router-dom';
import { removePost } from '../redux/action';

class Main extends Component {
  constructor() {
    super();
  }

  render() {
    // console.log(this.props);
    // console.log('data', this.props.posts);
    return (
      <div>
        <h1>
          <Link to='/'>Photowall</Link>{' '}
        </h1>
        <Route
          exact
          path='/'
          render={() => (
            <div>
              <PhotoWall {...this.props} />
            </div>
          )}
        />

        <Route
          path='/AddPhoto'
          render={({ history }) => (
            <AddPhoto {...this.props} onHistory={history} />
          )}
        />
      </div>
    );
  }
}

export default Main;
