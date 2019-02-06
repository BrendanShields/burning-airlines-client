import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import Home from './Home'
import Search from './FlightSearch'
import List from './List'


const Welcome = ({user, onSignOut})=> {
  // This is a dumb "stateless" component
  return (
    <div>
      Welcome <strong>User</strong>!
      <a href="javascript:;" onClick={onSignOut}>Sign out</a>
    </div>
  )
}

class LoginForm extends React.Component {
  // Using a class based component here because we're accessing DOM refs
  handleSignIn(e) {
    e.preventDefault()
    let username = this.refs.username.value
    let password = this.refs.password.value
    this.props.onSignIn(username, password)
  }

  render() {
    return (
      <form onSubmit={this.handleSignIn.bind(this)}>
        <h3>Sign in</h3>
        <input type="text" ref="username" placeholder="enter you username" />
        <input type="password" ref="password" placeholder="enter password" />
        <input type="submit" value="Login" />
      </form>
    )
  }
  }


class Nav extends Component {

  constructor(props) {
    super(props)
    // the initial application state
    this.state = {
      user: null
    }
  }

    // App "actions" (functions that modify state)
    signIn(username, password) {
      // This is where you would call Firebase, an API etc...
      // calling setState will re-render the entire app (efficiently!)
      this.setState({
        user: {
          username,
          password,
        }
      })
    }

    signOut() {
      // clear out user from state
      this.setState({user: null})
    }


  render () {
    return (

      <div>
        <h1>My cool App</h1>
        {
          (this.state.user) ?
            <Welcome
             user={this.state.user}
             onSignOut={this.signOut.bind(this)}
            />
          :
            <LoginForm
             onSignIn={this.signIn.bind(this)}
            />
        }


      <div>
      <Link to="/">home </Link>
      <Link to="/search">search </Link>
      <Link to="/list">list </Link>


      </div>
      </div>
    )
  }
}

export default Nav;
