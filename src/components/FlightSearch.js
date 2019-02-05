import React, { Component } from 'react';
import Search from './Search';
import List from './List';

class FlightSearch extends Component {
  // contructor to set state

  // AJAX get request to server to find flights

  render () {
    return (
      <div>
        <Search />
        <List />
      </div>
    );
  }
}

export default FlightSearch
