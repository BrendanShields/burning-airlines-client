import React, { Component } from 'react';
import '../App.css';
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
      current_seats: [],
      current_flights: [],
      origin: "",
      destination: "",
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
    this._handleOriginInput = this._handleOriginInput.bind(this);
    this._handleDestinationInput = this._handleDestinationInput.bind(this);
    this._handleSumbit = this._handleSumbit.bind(this);
    this._activateLasers = this._activateLasers.bind(this);
    this._handleClick = this._handleClick.bind(this);
    this.saveSeats = this.saveSeats.bind(this);
  }
    // Form Origin input handler
    _handleOriginInput(e){
      console.log(e.target.value);
      this.setState({origin: e.target.value});
    }

    // Form Destination input handler
    _handleDestinationInput(e){
      console.log(e.target.value);
      this.setState({destination: e.target.value});
    }

    // Form Submit handler
    _handleSumbit(e){
      e.preventDefault(e);
    const current_flights = this.state.flights.filter( (el, index) => {
      return el.origin.toLowerCase() === this.state.origin.toLowerCase() && el.destination.toLowerCase() === this.state.destination.toLowerCase();
    })
    this.setState({ current_seats: [] })
    this.setState({ current_flights: current_flights })

      console.log(current_flights)
      console.log(this.state.origin)
      console.log(this.state.destination)
    }

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

      <div className="wrap">
      <h1> Where do you want to head next? </h1>
      <form className="grid" onSubmit={ this._handleSumbit }>
        <div className="search">
          <label> Origin </label>
          <input type="search" className="searchTerm1" placeholder="Sydney" required onChange={ e => this._handleOriginInput(e) }/>
        </div>
        <div className="search">
          <label> Destination </label>
          <input type="search" className="searchTerm2"  placeholder="Melbourne" required onChange={ e => this._handleDestinationInput(e) }/>
        </div>
        <input type="submit" className="searchButton" value="find flights!"/>
      </form>

        {this.state.current_flights.map((s) =>
          <div className="square" key={s.id}  onClick={() =>
            this._activateLasers(s.id)}>
              Flight {s.id}  From {s.origin} to {s.destination} on {s.date}
            </div>
          )}

          {this.state.current_seats.map( (s) =>
          <div className="square" key={s.id} onClick={() =>
            this._handleClick(s.id)}>Seat ID: {s.id} user_id: {s.user_id}
          </div>
        )}
     </div>
    )
  }
}

export default SearchFlight;
