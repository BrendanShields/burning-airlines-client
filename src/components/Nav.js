import React, { Component } from 'react'
import { Link } from 'react-router-dom';


import Home from './Home'
import Search from './FlightSearch'
import List from './List'
import axios from 'axios'
const USERS_URL = 'https://burning-airlines-backend.herokuapp.com/users.json'
const Welcome = ({user, onSignOut})=> {
  // This is a dumb "stateless" component

  return (
    <div>
      Welcome <strong>{user.username}</strong>!
      <a href="javascript:;" onClick={onSignOut}>Sign out</a>
    </div>
  )
}

class LoginForm extends React.Component {
  // Using a class based component here because we're accessing DOM refs
  handleSignIn(e) {
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
      user: null,
      all_users: null,
      login: []
    }

    const fetchUsers = () => {
      axios.get(USERS_URL).then( (results) => {
        this.setState({ all_users: results.data })
      });
    }
    fetchUsers();
  }

    // App "actions" (functions that modify state)
    signIn(username, password) {
     let x = false
     const y = this.state.all_users.filter( (el, index) => {
       if (el.username === username && el.password_digest === password) {
       console.log('worked')
       x = true
      }
     });
     console.log(x)
     console.log(this.state)
    if(x === true){ this.setState({
        user: {
          username,
          password,
        }
      })
      }
    }

    signOut() {
      // clear out user from state
      this.setState({user: null})
    }


  render () {
    return (

      <div>
        {
          (this.state.user) ?
            <Welcome
             user={this.state.user}
             onSignOut={this.signOut.bind(this)
             }
            />
          :
            <LoginForm
             onSignIn={this.signIn.bind(this)}
            />
        }
      </div>
    )
  }
}

export default Nav;
