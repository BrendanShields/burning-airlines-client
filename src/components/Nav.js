import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import Home from './Home'
import Search from './FlightSearch'
import List from './List'

class Nav extends Component {

  render () {
    return (
      <div>
      <Link to="/">home </Link>
      <Link to="/search">search </Link>
      <Link to="/list">list </Link>


      </div>
    )
  }
}

export default Nav;
