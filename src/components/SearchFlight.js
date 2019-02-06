import React, { Component } from 'react';

import Search from './Search'
import List from './List'
// import SeatsPanel from './SeatsPanel'
import axios from 'axios'

const FLIGHTS_URL = 'https://burning-airlines-backend.herokuapp.com/flights.json';
const SEATS_URL = 'https://burning-airlines-backend.herokuapp.com/seats.json'
const USERS_URL = 'https://burning-airlines-backend.herokuapp.com/users.json'

//////////////// SEARCH FLIGHT AXIOS REQUEST ///////////////////////////////////
class SearchFlight extends Component{

  constructor () {
    super();
    //creates an array that the flights will be passed into
    this.state = {
      flights: [],
      seats: []
    }
    //function to retrieve the data from the server
    const fetchFlights = () => {
      axios.get(FLIGHTS_URL).then( (results) => {

        this.setState({ flights: results.data })

      });
    }
    fetchFlights();

    const fetchSeats = () => {
      axios.get(SEATS_URL).then( (results) => {

        this.setState({ seats: results.data })

      });
    }
    fetchSeats();
    this._activateLasers = this._activateLasers.bind(this);
  }


      _activateLasers(flight_seats){


        this.state.seats.map( (seat) =>{
        if (seat.flight_id == flight_seats) {
          console.log(seat)
        }
        })
      }




  render () {
    return (
      <div>

    { this.state.flights.map( (s) =>
    <div className="square" onClick={() => this._activateLasers(s.id)}>
    Flight {s.id}  From {s.origin} to {s.destination} on {s.date}
    </div> )}


    <p>{ this.state.seats.map( (s) =>
    <div className="square">Seat ID: {s.id}</div>
  )}</p>
     </div>

   )
  }
}


////////////////// SEARCH SEAT AXIOS REQUEST ///////////////////////////////////




export default SearchFlight;
