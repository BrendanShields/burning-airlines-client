import React, { Component } from 'react';
import SeatsPanel from './SeatsPanel';

class Reservation extends Component{
  // constructor(){
  //   super();
  //   this.state = {
  //     seats: Array(10).fill(null)
  //   }
  // //   this.setState({seats: this.props.seats.split(",")});
  // //
  // //   // this.props.seats.split(",")
  // }

  render(){
    return(
      <div>
      <SeatsPanel />
      </div>
    );
  }
}

export default Reservation;
