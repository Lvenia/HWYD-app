import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import NavBar from './NavBar';
import Start from './Start';
import Quiz from './Quiz';
import Day from './Day';
import Data from './Data';

class App extends Component {

  render() {
    return (
      <Router>
        <React.Fragment>

          <NavBar />

          <Switch>
            <Route path="/start" component={Start} />
            <Route path="/quiz" component={Quiz} />
            <Route path="/day" component={Day} />
            <Route path="/data" component={Data} />
          </Switch>

        </React.Fragment >
      </Router>
    );
  }

}

export default App;