import React, { Component } from 'react'
import '../App.css';
import List from './List';
import Nav from './Nav';
import SearchFlight from './SearchFlight';
import Login from './Login';

class Home extends Component {

  render () {
    return (
      <div>
      < Nav />
      < SearchFlight />
      </div>
    )
  }
}

export default Home;
