import React, { Component } from 'react'

class Search extends Component {
  constructor(){
    super();
    this.state = {
      content: ''
    }
    // this._handleClick = this._handleClick(this);
    this._handleChange = this._handleChange.bind(this);
    this._handleClick = this._handleClick.bind(this);

  }
  _handleClick(e){
    e.preventDefault();
    this.props.onSubmit(this.state.content);
  }
  _handleChange(e){
    // console.log(e.target.value);
    this.setState({content: e.target.value});

  }
  render () {
    return (
      <form onSubmit={this._handleClick}>
        <input type="text" onChange={ this._handleChange } value={ this.state.content }/>
        <input type="submit" value="search" />
      </form>
    )
  }
}

export default Search;
