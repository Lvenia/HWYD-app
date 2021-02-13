import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import NavBar from './NavBar';
import Start from './Start';
import Quiz from './Quiz/Quiz';
import Day from './DayReview/Day';
import Overview from './Overview/OverviewComponent';
import SpinnerComponent from './common/SpinnerComponent';
import * as actions from '../actions';

class App extends React.Component {
  componentDidMount = () => {
    const { checkAthentification } = this.props;
    checkAthentification();
  }

  renderRoutes() {
    const { auth } = this.props;
    const { isAuthenticated, isLoading } = auth;
    const shouldRedirect = !isAuthenticated && !isLoading;

    if (isLoading) {
      return <SpinnerComponent />;
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
        <Route path="/overview">
          {!shouldRedirect ? <Overview /> : <Redirect to="/" />}
        </Route>
      </Switch>
    );
  }

  render() {
    console.log('Welcome'); // eslint-disable-line no-console
    return (
      <Router>
        <NavBar />
        {this.renderRoutes()}
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  checkAthentification: actions.checkAthentification,
})(App);
