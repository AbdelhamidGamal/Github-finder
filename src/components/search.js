import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Spinner from './layout/Spinner';

export class Search extends Component {
  state = {
    value: ''
  };

  onValueChange = e => {
    this.setState({ value: e.target.value });
  };

  searchForThis = e => {
    e.preventDefault();
    this.props.searchForThis(this.state.value);
  };

  render() {
    const { users, loading } = this.props;
    return (
      <div className='container text-center'>
        <div className='mp2 search'>
          <h1 className='mp1 mt1'>Search Github Users</h1>
          <form action=''>
            <input
              type='text'
              name='findthis'
              value={this.state.value}
              onChange={this.onValueChange}
              placeholder='username'
            />
            <input className='btn' type='submit' onClick={this.searchForThis} />
          </form>
        </div>
        {loading && this.state.value !== '' ? <Spinner /> : ''}
        <div className='grid'>
          {users.map(user => (
            <div key={user.id} className='mp2'>
              <div>
                <img src={user.avatar_url} alt='' />
              </div>
              {user.login}
              <div>
                <Link to={`/user/${user.login}`}>Profile Page</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Search;

// login: "medo"
// id: 24014
// node_id: "MDQ6VXNlcjI0MDE0"
// avatar_url: "https://avatars3.githubusercontent.com/u/24014?v=4"
// gravatar_id: ""
// url: "https://api.github.com/users/medo"
// html_url: "https://github.com/medo"
// followers_url: "https://api.github.com/users/medo/followers"
// following_url: "https://api.github.com/users/medo/following{/other_user}"
// gists_url: "https://api.github.com/users/medo/gists{/gist_id}"
// starred_url: "https://api.github.com/users/medo/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/medo/subscriptions"
// organizations_url: "https://api.github.com/users/medo/orgs"
// repos_url: "https://api.github.com/users/medo/repos"
// events_url: "https://api.github.com/users/medo/events{/privacy}"
// received_events_url: "https://api.github.com/users/medo/received_events"
// type: "User"
// site_admin: false
// score: 1
