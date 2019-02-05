import React, { Component } from 'react'

class Search extends Component {

  constructor() {
    super();
    this.state = {
      query: "",
    }
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e){

  }

  render () {
    return (
      <div>
        <h1> Where do you want to head next? </h1>

        <label> Origin </label>
        <input type="search" placeholder="Sydney" />
        <label> Destination </label>
        <input type="search" placeholder="Melbourne" />
        <input type="submit" value="find flights!"/>

      </div>

    )
  }
}

export default Search;
