import React, { Component } from 'react';
import '../App.css';
/////////////////// IMPORT COMPONENTS //////////////////////////////////////////
import Search from './Search';
import List from './List';
import Reservation from './Reservation';
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
      current_users_flights: [],
      origin: "Sydney",
      destination: "Melbourne",
      message: ""
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
    this.saveSeats = this.saveSeats.bind(this);
    this._test = this._test.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }
    _test(e){
      console.log('worked')
    }
    // Form Origin input handler
    _handleOriginInput(e){

      this.setState({origin: e.target.value});
    }

    // Form Destination input handler
    _handleDestinationInput(e){

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
    this.setState({ message: "" })
      console.log(current_flights)
      console.log(this.state.origin)
      console.log(this.state.destination)
    }

  // UPDATES SEAT WITH USER_ID /////////////////////////////////////////////////
  saveSeats(e, seat_id, user_id, flight_id) {

    e.preventDefault();
    const URL = `https://burning-airlines-backend.herokuapp.com/seats/${seat_id}.json`
    if ( user_id === false ) {
      console.log("are we getting here?");
      axios.put(URL,
      {
        id: seat_id,
        user_id: 1,
        seat_num: seat_id
      }).then((results) => {
        this.setState({message: `Seat ${seat_id} booked sucessfully for flight ${flight_id}`})
        axios.get(SEATS_URL).then( (results) => {
          this.setState({ seats: results.data })}).then(this._activateLasers(flight_id))
    }).catch(console.warn())
  } else {
    console.log("Or here?");
    axios.put(URL,
    {
      id: seat_id,
      user_id: 0,
      seat_num: seat_id
    }).then((results) => {
      this.setState({message: `Seat ${seat_id} booked sucessfully for flight ${flight_id}`})
      axios.get(SEATS_URL).then( (results) => {
        this.setState({ seats: results.data })}).then(this._activateLasers(flight_id))
  }).catch((e) => console.warn("Cannot Update", e))
    }
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
      _handleClick(flight_id){
           this.setState({message: ""})
           this._activateLasers(flight_id);
         }

  // RENDERS THE VIEW //////////////////////////////////////////////////////////
  render () {
    return (

      <div className="searchBar">
      <h1 class="searchHeading"> Where do you want to head next? </h1>
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

      <div className="flights-wrap">
        {this.state.current_flights.map((flight) =>
          <div className="square" key={flight.id}  onClick={() =>
            this._handleClick(flight.id)}>
              Flight {flight.id}  From {flight.origin} to {flight.destination} on {flight.date}
            </div>
          )}
      </div>
      <hr />
      <div className="flex-container">
          {this.state.current_seats.map( (s) =>
          <button className={s.user_id === 0 ? "notbooked" : "booked"}><div className="grid-item" key={s.id} onClick={(e) => this.saveSeats(e, s.id, s.user_id, s.flight_id)}>
              Seat ID: {s.id} user_id: {s.user_id}
          </div></button>
        )}
      <div className="msg">{this.state.message}</div>
        </div>
     </div>
    )
  }
}

export default SearchFlight;
