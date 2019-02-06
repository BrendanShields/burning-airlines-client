import React, { Component } from 'react'
import '../App.css';
import List from './List';
import Nav from './Nav';
import FlightSearch from './FlightSearch';
import Login from './Login';

class Home extends Component {

  render () {
    return (
      <div>
        < Login />
        <Nav />
        <FlightSearch />
      </div>
    )
  }
}

export default Home;
