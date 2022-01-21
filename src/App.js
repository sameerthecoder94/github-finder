import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
// import UserItem from './components/users/UserItem';
import Users from './components/users/Users';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar title='Github Finder' icon='fab fa-github' />
        {/* <UserItem /> */}
        <div className='container'>
          <Users />
        </div>
      </Fragment>
    );
  }
}

export default App;
