import React, { Component } from 'react'


import List from './List'
import Nav from './Nav'
import FlightSearch from './FlightSearch';

class Home extends Component {

  render () {
    return (
      <div>
        <Nav />
        <FlightSearch />
      </div>
    )
  }
}

export default Home;
