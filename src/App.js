import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar title='Github Finder' icon='fab fa-github' />
      </Fragment>
    );
  }
}

export default App;
