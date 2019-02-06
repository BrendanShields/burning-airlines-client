import React, { Component } from 'react';

import Search from './Search'
import List from './List'
// import SeatsPanel from './SeatsPanel'

class SearchFlight extends Component{
  constructor(){
    super();
    this.state = {
      searchcontent: '',

    };
    this.SearchFlight = this.SearchFlight.bind(this);
  }
  SearchFlight(flight){
    console.log(flight);
    // this.setState({seats: '1,2,3,4'.split(',')});
    // seats: '1,2,3,4';
  }
  render(){
    return(
      <div>
      < Search onSubmit={(f)=>this.SearchFlight(f)}/>
      < List />


      </div>
    );
  }
}

export default SearchFlight;
