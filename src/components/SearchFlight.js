import React, { Component } from 'react';
/////////////////// IMPORT COMPONENTS //////////////////////////////////////////
import Search from './Search'
import List from './List'
////////////////// AXIOS SET UP ////////////////////////////////////////////////
import axios from 'axios'
const FLIGHTS_URL = 'https://burning-airlines-backend.herokuapp.com/flights.json';
const SEATS_URL = 'https://burning-airlines-backend.herokuapp.com/seats.json'
const USERS_URL = 'https://burning-airlines-backend.herokuapp.com/users.json'
//////////////// SEARCH FLIGHT AXIOS REQUEST ///////////////////////////////////
class SearchFlight extends Component{
  constructor () {
    super();

    // creates an array that the flights will be passed into
    this.state = {
      flights: [],
      seats: [],
      current_seats: []
    }

    //function to retrieve the JSON data from rails API and process into arrays
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

    // Binding the functions to this
    this._activateLasers = this._activateLasers.bind(this);
    this._handleClick = this._handleClick.bind(this);
    this.saveSeats = this.saveSeats.bind(this);
  }

  // Runs the saveSeats function
  _handleClick(seat_id){
    this.saveSeats(seat_id);
  };

  // UPDATES SEAT WITH USER_ID /////////////////////////////////////////////////
  saveSeats(seat_id) {
    console.log(seat_id);
      axios.put(`https://burning-airlines-backend.herokuapp.com/seats/${seat_id}`,
      {
        id: seat_id,
        user_id: 1,
        seat_num: seat_id
      }
    ).then((results) => {
      console.log(results)
   });
  };

  // WHEN USER CLICKS ON A FLIGHT, DISPLAYS ALL SEATS ON FLIGHT ////////////////
  _activateLasers(flight_seats){
        console.log(flight_seats)
        const current_seats = this.state.seats.filter( function( el, index ) {
               return el.flight_id === flight_seats;
           });
        console.log("current seats array", current_seats);
        this.setState({ current_seats: current_seats })
        console.log("state", this.state.current_seats)
      }

  // RENDERS THE VIEW //////////////////////////////////////////////////////////
  render () {
    return (
      <div>
        {this.state.flights.map((s) =>
          <div className="square" key={s.id}  onClick={() =>
            this._activateLasers(s.id)}>
              Flight {s.id}  From {s.origin} to {s.destination} on {s.date}
            </div>
          )}
        <hr />

       { this.state.current_seats.map( (s) =>
          <div className="square" key={s.id} onClick={() =>
            this._handleClick(s.id)}>Seat ID: {s.id} user_id: {s.user_id}
          </div>
        )}
     </div>
    )
  }
}

export default SearchFlight;
