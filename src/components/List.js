import React, { Component } from 'react'

import axios from 'axios'

const SERVER_URL = 'https://burning-airlines-backend.herokuapp.com/flights.json';

// class List extends Component {
//
//   constructor(){
//   super();
//   this.state = { content: ''}
//   this._handleChange = this._handleChange.bind(this)
//   this._handleSubmit = this._handleSubmit.bind(this)
// }
//
//   render () {
//     return (
//
//
//
//     // Flight.each { |flight| console.log } to show all flights
//     // Flight.seats.each { |seat| console.log } to display all seats
//     // When a user clicks on an individual seat the U_ID is appended to the seat.
//     // with Seat.user = current_user
//
//
//     )
//   }
// }

//

    // creates a component to display all available flights.
class List extends Component {
  constructor () {
    super();
    //creates an array that the flights will be passed into
    this.state = {
      flights: []
    }
    //function to retrieve the data from the server
    const fetchFlights = ( ) => {
      axios.get(SERVER_URL).then( (results) => {
        console.log(results)
        // this.setState({ flights: results.data })
      })
    }
    fetchFlights()
  }

  render () {
    return (
      <h1> {this.state.flights} </h1>
    )
  }
}

export default List;
