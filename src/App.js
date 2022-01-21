import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar title='Github Finder' icon='fab fa-github' />
        <UserItem />
      </Fragment>
    );
  }
}

export default App;
