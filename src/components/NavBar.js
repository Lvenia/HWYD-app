import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from '../actions';


class NavBar extends React.Component {

  renderButtons() {

    const buttons = [
      {
        name: 'Start',
        path: "/"
      },
      {
        name: 'Quiz',
        path: "/quiz"
      },
      {
        name: 'Day',
        path: "/day"
      },
      {
        name: 'All data',
        path: "/data"
      },
      {
        name: 'Users',
        path: "/users"
      },
    ];

    if (this.props.auth.isAuthenticated) {
      return buttons.map((button, index) => {
        return (
          <NavLink
            className="nav-link"
            to={button.path}
            key={index}
          >
            <li className="nav-item">{button.name}</li>
          </NavLink>
        );
      });
    } else {
      return (
        <NavLink
          className="nav-link"
          to={buttons[0].path}
        >
          <li className="nav-item">{buttons[0].name}</li>
        </NavLink>
      )
    }

  }

  renderAuthButtons() {
    if (this.props.auth.isAuthenticated) {
      return (
        <button
          onClick={this.props.logOut}
        >
          Log Out
        </button>
      )
    } else {
      return (
        <>
          <a href="http://localhost:4000/auth/google">
            Google
          </a>
          <a href="http://localhost:4000/auth/facebook">
            Log in with Facebook
          </a>
        </>
      )
    }
  }

  render() {
    return (
      <div>
        <ul className="nav nav-tabs" >
          {this.renderButtons()}
          {this.renderAuthButtons()}
        </ul>
      </div >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { logOut })(NavBar);