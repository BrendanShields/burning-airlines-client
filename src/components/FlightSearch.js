import React, { Component } from 'react';
import Search from './Search';
import List from './List';

class FlightSearch extends Component {
  // contructor to set state
  constructor() {
    super();
    this.state = {
      flights: [],
    }
    this.getFlights = this.getFlights.bind(this);
  }

  getFlights(origin, destination) {
    console.log(`on form submit calling getFlights function`);
    // AJAX get request to server to find flights
  }

  render () {
    return (
      <div>
        <Search onSubmit={ this.getFlights }/>
        <List onSubmit={ this.state.flights } />
      </div>
    );
  }
}

export default FlightSearch
