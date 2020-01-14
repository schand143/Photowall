import React, { Component } from 'react';
import List from './List';
import Title from './Title';

class Main extends Component {
  render() {
    return (
      <div>
        {' '}
        <Title title={'toDos'} />
        <List tasks={['hi', 'how are you']} />
        <List tasks={['hey', 'hello']} />{' '}
      </div>
    );
  }
}

export default Main;
