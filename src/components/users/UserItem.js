import React, { Component } from 'react';

class UserItem extends Component {
  render() {
    const { avatar_url, login_name, html_url } = this.props.userObj;

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
