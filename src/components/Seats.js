import React, { Component } from 'react';
// import Seats from './Seats';

class Seats extends Component{
  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}
export default Seats;
