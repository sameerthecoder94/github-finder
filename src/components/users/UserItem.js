import React, { Component } from 'react';

class UserItem extends Component {
  state = {
    id: 'id',
    avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
    login_name: 'mojombo',
    html_url: 'https://github.com/mojombo',
  };

  render() {
    const { avatar_url, login_name, html_url } = this.state; //destructure state object

    return (
      <div className='card text-center'>
        <img
          src={avatar_url}
          alt='avatar-img'
          className='round-img'
          style={{ width: '60px' }}
        />
        <h3>{login_name}</h3>
        <a href={html_url}>More</a>
      </div>
    );
  }
}

export default UserItem;
