import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Search from './components/search';
import User from './components/users/User.js';
import About from './components/pages/about';
import './App.css';

export class App extends Component {
  state = {
    users: [],
    user: {},
    userRepos: [],
    loading: false
  };

  getThisUserInfo = async userlogin => {
    this.getUserRepos(userlogin);
    this.setState({ loading: true });

    const res = await fetch(
      `https://api.github.com/users/${userlogin}?client-id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client-secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    const data = await res.json();

    this.setState({ user: data, loading: false });
  };

  getUserRepos = async userlogin => {
    const res = await fetch(
      `https://api.github.com/users/${userlogin}/repos?per_page=5&sort=asc&client-id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client-secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    const data = await res.json();
    this.setState({ userRepos: data });
  };

  searchForThis = username => {
    this.setState({ loading: true });

    fetch(
      `https://api.github.com/search/users?q=${username}&client-id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client-secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
      .then(res => res.json())
      .then(data => this.setState({ users: data.items, loading: false }));
  };

  render() {
    const { users, user, loading, userRepos } = this.state;
    return (
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Search
                users={users}
                loading={loading}
                searchForThis={this.searchForThis}
              />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            {/* <Route exact path='/user/:userlogin'>
              <User />
            </Route> */}
            <Route
              path='/user/:userlogin'
              render={props => (
                <User
                  {...props}
                  getThisUserInfo={this.getThisUserInfo}
                  user={user}
                  loading={loading}
                  userRepos={userRepos}
                />
              )}
            />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
