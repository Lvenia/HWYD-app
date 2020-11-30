import React from 'react';
import { connect } from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import NavBar from './NavBar';
import Start from './Start';
import Quiz from './Quiz/Quiz';
import Day from './ByDay/Day';
import Data from './Data';

import { checkAthentification } from '../actions'

class App extends React.Component {

  componentDidMount() {
    this.props.checkAthentification()
  }

  renderRoutes() {
    if (this.props.auth.isAuthenticated) {
      return (
        <Switch>
          <Route path="/home" component={Start} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/day" component={Day} />
          <Route path="/data" component={Data} />
        </Switch>
      )
    } else {
      return (
        <Switch>
          <Route exact path="/" component={Start} />
        </Switch>
      )
    }
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          {this.renderRoutes()}
        </React.Fragment >
      </Router >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps, { checkAthentification })(App);
