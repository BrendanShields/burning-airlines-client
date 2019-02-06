import React, { Component } from 'react';
// import Seats from './Seats';
import '../App.css';

class Seats extends Component{
  render() {
    return (
      <div
        className="square"
        onClick={() => this.props.onClick()}>
        {this.props.value}
      </div>
    );
  }
}
export default Seats;
