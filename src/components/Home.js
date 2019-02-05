import React, { Component } from 'react'

import List from './List'
import Nav from './Nav'
import Search from './Search'

class Home extends Component {

  render () {
    return (
      <div>
      < Nav />
      < Search />
      < List />

      </div>
    )
  }
}

export default Home;
