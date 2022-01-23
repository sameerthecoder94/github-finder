import React, { Fragment, useContext, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = ({ getUserRepos, repos, match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, loading, user } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    login,
    location,
    avatar_url,
    bio,
    blog,
    html_url,
    company,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back To Search
      </Link>
      <div className='card grid-2'>
        <div className='all-center'>
          <img src={avatar_url} alt='avatar-img' style={{ width: '150px' }} />
          <h1>{login}</h1>
          <p>
            {location && (
              <Fragment>
                <p>Location: {location}</p>
              </Fragment>
            )}
          </p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1'>
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username:</strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company:</strong> {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website:</strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers} </div>
        <div className='badge badge-success'>Following: {following} </div>
        <div className='badge badge-light'>Public Repos: {public_repos} </div>
        <div className='badge badge-dark'>Public Gists: {public_gists} </div>
      </div>

      <Repos repos={repos} />
    </Fragment>
  );
};

User.propType = {
  repos: PropTypes.array.isRequired,
  getUserRepos: PropTypes.func.isRequired,
};

export default User;
