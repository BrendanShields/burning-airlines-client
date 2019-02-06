import React, { Component } from 'react'

class Search extends Component {

  constructor() {
    super();
    this.state = {
      origin: "",
      destination: "",
    }
    this._handleOriginInput = this._handleOriginInput.bind(this);
    this._handleDestinationInput = this._handleDestinationInput.bind(this);
    this._handleSumbit = this._handleSumbit.bind(this);
  }

  _handleOriginInput(e){
    console.log(e.target.value);
    this.setState({origin: e.target.value});
  }

  _handleDestinationInput(e){
    console.log(e.target.value);
    this.setState({destination: e.target.value});
  }

  _handleSumbit(e){
    e.preventDefault(e);
    this.props.onSubmit(this.state.origin, this.state.destination) /// UNSURE ON CORRECT WAY TO DO THIS ////
  }

  render () {
    return (
      <div className>
        <h1> Where do you want to head next? </h1>
        <form onSubmit={ this._handleSumbit }>
          <div>
            <label> Origin </label>
            <input type="search" placeholder="Sydney" required onChange={ e => this._handleOriginInput(e) }/>
          </div>
          <div>
            <label> Destination </label>
            <input type="search" placeholder="Melbourne" required onChange={ e => this._handleDestinationInput(e) }/>
          </div>
          <input type="submit" value="find flights!"/>
        </form>
      </div>

    )
  }
}

export default Search;
