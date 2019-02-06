import React, { Component } from 'react';
import Seats from './Seats';

class SeatsPanel extends Component {
  constructor(){
    super();
    this.state = {
      seats: Array(24).fill(null)
    };
    this.handleClick = this.handleClick.bind(this);
    this.bookFlight = this.bookFlight.bind(this);

  //   this.setState({seats: this.props.seats.split(",")});
  //
  //   // this.props.seats.split(",")
  }
  bookFlight(){
    console.log(this.state.seats);
    console.log(this.state.seats.filter(item => item != null ));
  }
  handleClick(i) {
    const squares = this.state.seats.slice();
    squares[i] = 'Booked';
    this.setState({seats: squares});
  }
  renderSeats(i){
    return <Seats value={this.state.seats[i]}
        onClick={() => this.handleClick(i)}/>;
  }
  render(){
    return(
      <div>
          Please select your seat:
          <br />

        <div className="board-row">

          {this.renderSeats(0)}
          {this.renderSeats(1)}
          {this.renderSeats(2)}

          {this.renderSeats(12)}
          {this.renderSeats(13)}
          {this.renderSeats(14)}
        </div>
        <div className="board-row">
          {this.renderSeats(3)}
          {this.renderSeats(4)}
          {this.renderSeats(5)}

          {this.renderSeats(15)}
          {this.renderSeats(16)}
          {this.renderSeats(17)}
        </div>
        <div className="board-row">
          {this.renderSeats(6)}
          {this.renderSeats(7)}
          {this.renderSeats(8)}

          {this.renderSeats(18)}
          {this.renderSeats(19)}
          {this.renderSeats(20)}

        </div>
        <div className="board-row">
          {this.renderSeats(9)}
          {this.renderSeats(10)}
          {this.renderSeats(11)}

          {this.renderSeats(21)}
          {this.renderSeats(22)}
          {this.renderSeats(23)}

        </div>
        <input type="submit" value="Book" onClick={this.bookFlight} />
      </div>
    );
  }
}
// function Seats(props) {
// return (
//   <button onClick={() => this.setState({seats: 'X'})}>
//     { this.state.seats }
//   </button>
// );
// }
export default SeatsPanel;
