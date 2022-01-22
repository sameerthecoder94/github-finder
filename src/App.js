import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
// import UserItem from './components/users/UserItem';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  // componentDidMount() {
  //   axios.get('https://api.github.com/users').then((res) => {
  //     console.log(res.data);
  //   });
  // }

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   this.setState({ users: res.data, loading: false });
  // }

  //Search Github users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  //Clear users from state
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  render() {
    const { users, loading } = this.state;
    return (
      <Fragment>
        <Navbar title='Github Finder' icon='fab fa-github' />
        <Search
          searchUsers={this.searchUsers}
          clearUsers={this.clearUsers}
          showClear={users.length > 0 ? true : false}
        />
        {/* <UserItem /> */}
        <div className='container'>
          <Users loading={loading} users={users} />
        </div>
      </Fragment>
    );
  }
}

export default App;
