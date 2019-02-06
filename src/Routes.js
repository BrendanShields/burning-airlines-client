import React from 'react'; //component not required
import { HashRouter as Router, Route} from 'react-router-dom'; //renaming router with destructuring

import Home from './components/Home';
import FlightSearch from './components/FlightSearch';
import List from './components/List';
import SeatsPanel from './components/SeatsPanel';
import Seats from './components/Seats'

import Reservation from './components/Reservation';

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path="/search" component={ FlightSearch } />
      <Route path="/list" component={ List } />
      <Route path="/book" component={ Reservation } />
      <Route path="/seats" component={ Seats } />

    </div>
  </Router>
);

export default Routes;
