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
      seats: [],
      current_seats: []
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
    this._handleClick = this._handleClick.bind(this);
    this.saveSeats = this.saveSeats.bind(this);

  }

  _handleClick(flight_id){
    // e.preventDefault();
    this.saveSeats(flight_id);
  };

  saveSeats(seat_id) {
    console.log(seat_id);
    // .post("/api/Users", {
    //             userFirstName: this.firstName.value,
    //             userLastName: this.lastName.value,
    //             userEmail: this.email.value,
    //             userPassword: this.password1.value
    //         })
    axios.put(SEATS_URL ,
      {
        id: seat_id,
        user_id: 1,
        seat_num: seat_id
      }
    ).then((results) => {
      console.log(results)
     // this.setState({secrets: [...this.state.secrets, results.data] })
   });
  };
      _activateLasers(flight_seats){

        console.log(flight_seats)
        const current_seats = this.state.seats.filter( function( el, index ) {
               return el.flight_id === flight_seats;
           });

      // this.state.seats.map( (seat) =>{
      //   if (seat.flight_id == flight_seats) {
      // this.setState({current_seats: seat})
      //   }
      //   })
        console.log("current seats array", current_seats);
      // const current_seats = this.state.seats.filter(function(){
      //   return seat.flight_id == flight_seats;
      // })
        this.setState({ current_seats: current_seats })
        console.log("state", this.state.current_seats)
      //   console.log(current_seats)
      }




  render () {
    return (
      <div>

    { this.state.flights.map( (s) =>
    <div className="square" key={s.id}  onClick={() => this._activateLasers(s.id)}>
    Flight {s.id}  From {s.origin} to {s.destination} on {s.date}
    </div> )}
<hr />

    { this.state.current_seats.map( (s) =>
    <div className="square" key={s.id} onClick={() => this._handleClick(s.id)}>Seat ID: {s.id} user_id: {s.user_id}</div>
  )}
     </div>

   )
  }
}


////////////////// SEARCH SEAT AXIOS REQUEST ///////////////////////////////////




export default SearchFlight;
