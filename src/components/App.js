import React from 'react';
import { connect } from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import NavBar from './NavBar';
import Start from './Start';
import Quiz from './Quiz/Quiz';
import Day from './ByDay/Day';
import Data from './Data';
import SpinnerComponent from './common/SpinnerComponent';

import { checkAthentification } from '../actions'


class App extends React.Component {

  componentDidMount = () => {
    this.props.checkAthentification()
  }

  renderRoutes() {
    const { isAuthenticated, isLoading } = this.props.auth;
    const shouldRedirect = !isAuthenticated && !isLoading;

    if (isLoading) {
      return <SpinnerComponent />
    }

    return (
      <Switch>
        <Route exact path="/" component={Start} />
        <Route path="/quiz">
          {!shouldRedirect ? <Quiz /> : <Redirect to="/" />}
        </Route>
        <Route path="/day">
          {!shouldRedirect ? <Day /> : <Redirect to="/" />}
        </Route>
        <Route path="/data">
          {!shouldRedirect ? <Data /> : <Redirect to="/" />}
        </Route>
      </Switch>
    )
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
