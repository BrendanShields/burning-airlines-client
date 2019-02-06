import React, {
  Component
} from 'react'
import {
  Link
} from 'react-router-dom';

import axios from 'axios'

// AXIOS //
const USERS_URL = 'https://burning-airlines-backend.herokuapp.com/users.json';

const Welcome = ({
  user,
  onSignOut
}) => {
  // This is a dumb "stateless" component
  return ( <
    div >
    Welcome < strong > User < /strong>! <
    a href = "javascript:;"
    onClick = {
      onSignOut
    } > Sign out < /a> <
    /div>
  )
}

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
      user: "",
      currentUser: "",
    }

    //function to retrieve JSON data
    // const fetchUsers = () => {
    //   axios.get(USERS_URL).then( (results) => {
    //     this.setState({ users: results.data })
    //   });
    // }
    // fetchUsers();
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
      user: null,
      users: [],
      currentUser: ""
    }
    const fetchUsers = () => {
      axios.get(USERS_URL).then((results) => {
        this.setState({
          users: results.data
        })
      });
    }
    fetchUsers();
    this.handleSignIn = this.handleSignIn.bind(this);
  }
  handleSignIn(e) {
    // e.preventDefault()
    alert('123');
    let username = this.refs.username.value
    let password = this.refs.password.value
    // let user = 0
    const currentUser = this.state.users.filter((el, index) => {
      return el.username === username && el.password_digest === password;
    });
    if (currentUser.length > 0) {
      this.setState({
        user: username
      });
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

      <
      div >
      <
      h1 > My cool App < /h1> {
        (this.state.user) ?
        <
        Welcome
        user = {
          this.state.user
        }
        onSignOut = {
          this.signOut.bind(this)
        }
        /> :
        <
        LoginForm
        onSignIn = {
          this.signIn.bind(this)
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
