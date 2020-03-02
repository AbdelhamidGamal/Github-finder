import React, { Component } from 'react';
import Spinner from '../layout/Spinner';

export class User extends Component {
  async componentDidMount() {
    this.props.getThisUserInfo(this.props.match.params.userlogin);
  }

  render() {
    const { user, loading, userRepos } = this.props;
    if (loading) {
      return <Spinner />;
    }
    if (user) {
      const {
        avatar_url,
        bio,
        company,
        following,
        followers,
        hireable,
        login,
        name,
        html_url
      } = user;
      return (
        <div>
          <div className='grid2 container mt1'>
            <div className='avatar'>
              <img src={avatar_url} alt='' />
            </div>

            <div className='center-text mt5'>
              <h1>{name}</h1>
              <p>{company}</p>
              <p>{bio}</p>
            </div>
          </div>
          <div className='container mt2'>
            {userRepos.map(repo => (
              <div key={repo.id}>
                <a class='btn mr1 mt1' href={repo.html_url}>
                  {repo.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default User;
