import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ userObj: { avatar_url, login, html_url } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt='avatar-img'
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <a href={html_url}>More</a>
    </div>
  );
};

UserItem.protoTypes = {
  userObj: PropTypes.object.isRequired,
};

export default UserItem;
