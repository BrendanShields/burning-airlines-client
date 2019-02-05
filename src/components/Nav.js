import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const Index = () => <h2>Home</h2>;
const About = () => <h2>Flights</h2>;
const Users = () => <h2>User</h2>;


class Nav extends Component {
  render () {
    return (

        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about/">About</Link>
                </li>
                <li>
                  <Link to="/users/">Users</Link>
                </li>
              </ul>
            </nav>

            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
          </div>
        </Router>

      );
    }
  }

      export default Nav;
