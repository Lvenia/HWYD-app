import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import NavBar from './NavBar';
import Start from './Start';
import Quiz from './Quiz/Quiz';
import Day from './Day';
import Data from './Data';
import Users from './UserComponents/Users';
import UserDetails from './UserComponents/UserDetails';
import EditUserDetails from './UserComponents/EditUserDetails';

class App extends React.Component {

  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Start} />
            <Route path="/quiz" component={Quiz} />
            <Route path="/day" component={Day} />
            <Route path="/data" component={Data} />
            <Route path="/users" component={Users} />
            <Route path="/user/:id" component={UserDetails} />
            <Route path="/edit/:id" component={EditUserDetails} />
          </Switch>
        </React.Fragment >
      </Router>
    );
  }
}

export default App;

//what's better - to wrap all the children in the BrovserRouter Component or just an App component in index.js?