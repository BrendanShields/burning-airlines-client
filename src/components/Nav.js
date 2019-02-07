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
      Welcome <strong>User</strong>!
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

  // Using a class based component here because we're accessing DOM refs
  // handleSignIn(e) {
  //   e.preventDefault()
  //   let username = this.refs.username.value
  //   let password = this.refs.password.value
  //   // let user = 0
  //   const currentUser = this.state.users.filter( (el, index) => {
  //     return el.username === username && el.password_digest === password;
  //   });
  //   if (currentUser.length > 0)
  //   {
  //     this.setState({ user: username });
  //   }
  //   console.log(username);
  //
  // }
  //
  // handleClick(e) {
  //   e.preventDefault();
  //   this.props.handleSignIn.
  // }


  render() {
    return ( <
      form onSubmit = {
        this.props.handleClick
      } >
      <
      h3 > Sign in < /h3> <
      input type = "text"
      ref = "username"
      placeholder = "enter you username"
      required / >
      <
      input type = "password"
      ref = "password"
      placeholder = "enter password"
      required / >
      <
      input type = "submit"
      value = "Login" / >
      <
      /form>
    )
  }
}


class Nav extends Component {

  constructor(props) {
    super(props);
    // the initial application state
    this.state = {
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
    console.log(username);

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
    this.setState({
      user: null
    })
  }


  render() {
    return (

      <div>
        <h1>My cool App</h1>
        {
  < SearchFlight />
        }
        />
      }


      <
      div >
      <
      Link to = "/" > home < /Link> <
      Link to = "/search" > search < /Link> <
      Link to = "/list" > list < /Link>


      <
      /div> <
      /div>
    )
  }
}

export default Nav;
