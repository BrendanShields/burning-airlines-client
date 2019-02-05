import React, { Component } from 'react'

class SeatsPanel extends Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     seats: []
  //   }
  //   this.setState({seats: this.props.seats.split(",")});
  //
  //   // this.props.seats.split(",")
  // }
  renderSeats(i){
    return <Seats seats={this.props.seats[i]} />;
  }
  render(){
    return(
      {this.renderSeats(0)}
      {this.renderSeats(1)}

    );
  }
}
function Seats(props) {
return (
  <button className="tinytictac tinytictacdiv" onClick={props.onClick}>
    {props.seats}
  </button>
);
}
export default SeatsPanel;
