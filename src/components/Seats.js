// import React, { Component } from 'react';
// // import Seats from './Seats';
//
// class Seats extends Component{
//   render() {
//     return (
//       <div
//         className="square" height
//         onClick={() => this.props.onClick()}>
//         {this.props.value}
//       </div>
//     );
//   }
// }
// export default Seats;


import React, { Component } from 'react'

import axios from 'axios'

const SEATS_URL = 'https://burning-airlines-backend.herokuapp.com/seats.json';


// class Seat extends Component {
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
class Seat extends Component {
  constructor () {
    super();
    //creates an array that the flights will be passed into
    this.state = {
      seats: []
    }
    //function to retrieve the data from the server
    const fetchSeats = ( ) => {
      axios.get(SEATS_URL).then( (results) => {

        this.setState({ seats: results.data })
        console.log(results.data[0].id)
      })
    }
    fetchSeats();
  }


  render () {
    return (

    <div>
    { this.state.seats.map( (s) =>

    <div className="square">Seat ID: {s.id}</div>

    )}


  </div>
    )
  }
}

export default Seat;
