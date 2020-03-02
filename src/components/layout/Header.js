import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <header>
        <div className='container header'>
          <div>
            <h1>Github Finder</h1>
          </div>
          <div>
            <ul>
              <Link className='btn btnlink' to='/'>
                Home
              </Link>
              <Link className='btn btnlink' to='/about'>
                About
              </Link>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
