import React, { Component } from 'react';
import Seats from './Seats';

class SeatsPanel extends Component {
  constructor(){
    const SERVER_URL = 'http://localhost:3000/seats.json';

    super();
    this.state = {
      seats: Array(24).fill(null),
      data: [null, "B", null, null, null, "B", null, "B", "B", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
    };
    this.handleClick = this.handleClick.bind(this);
    this.bookFlight = this.bookFlight.bind(this);
    // const fillstate = () => {
    //   const seats = [null, "B", null, null, null, "B", null, "B", "B", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
    //   this.setState({seats: seats});
    //   console.log(this.state.seats);
    // };
    //
    // fillstate();

    // const fetchSeats = () => {
    //   axios.get(SERVER_URL).then((results) => {
    //     // this.setState({secrets: results.data });
    //     // setTimeout(fetchSecrets,4000);
    //     console.log(results.data);
    //   });
    //   const seats = [null, "B", null, null, null, "B", null, "B", "B", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
    //   this.setState({seats: seats});
    //   console.log(this.state.seats);
    // };
    // fetchSeats();
  //   this.setState({seats: this.props.seats.split(",")});
  //
  //   // this.props.seats.split(",")
  }
  bookFlight(){
    console.log(this.state.data.filter(item => item != null ));
  }
  handleClick(i) {
<<<<<<< HEAD
    // const squares = this.state.seats.slice();
    // squares[i] = this.state.seats;
    // this.setState({seats: squares});
    const seats = this.state.data.slice();
    if(seats[i] === 'B')
    return;
    seats[i] = 'B';
    this.setState({data: seats});
    console.log(this.state.data);
=======
    const squares = this.state.seats.slice();
    squares[i] = 'Booked';
    this.setState({seats: squares});
>>>>>>> cd89ca04706c87e2241c538bd4782385347df9c4
  }
  renderSeats(i,val){
    // console.log(this.state.seats);val === null ? '' : val

    return <Seats value={this.state.data[i]}
        onClick={() => this.handleClick(i)}/>;
  }
  render(){
    return(
      <div>
          Please select your seat:
          <br />

        <div className="board-row">

          {this.renderSeats(0,this.state.data[0])}
          {this.renderSeats(1,this.state.data[1])}
          {this.renderSeats(2,this.state.data[2])}

          {this.renderSeats(12,this.state.data[12])}
          {this.renderSeats(13,this.state.data[13])}
          {this.renderSeats(14,this.state.data[14])}
        </div>
        <div className="board-row">
          {this.renderSeats(3,this.state.data[3])}
          {this.renderSeats(4,this.state.data[4])}
          {this.renderSeats(5,this.state.data[5])}

          {this.renderSeats(15,this.state.data[15])}
          {this.renderSeats(16,this.state.data[16])}
          {this.renderSeats(17,this.state.data[17])}
        </div>
        <div className="board-row">
          {this.renderSeats(6,this.state.data[6])}
          {this.renderSeats(7,this.state.data[7])}
          {this.renderSeats(8,this.state.data[8])}

          {this.renderSeats(18,this.state.data[18])}
          {this.renderSeats(19,this.state.data[19])}
          {this.renderSeats(20,this.state.data[20])}

        </div>
        <div className="board-row">
          {this.renderSeats(9),this.state.data[9]}
          {this.renderSeats(10),this.state.data[10]}
          {this.renderSeats(11),this.state.data[11]}

          {this.renderSeats(21),this.state.data[21]}
          {this.renderSeats(22),this.state.data[22]}
          {this.renderSeats(23),this.state.data[23]}

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
