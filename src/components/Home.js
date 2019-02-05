import React, { Component } from 'react'


import List from './List'
import Nav from './Nav'
import SearchFlight from './SearchFlight';

class Home extends Component {

  render () {
    return (
      <div>
      <Nav />
      < SearchFlight />
      </div>
    )
  }
}

export default Home;
