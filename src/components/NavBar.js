import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from '../actions';
import AppButton from '../components/AppButton';
import { withRouter } from 'react-router-dom';


class NavBar extends React.Component {


  renderTabs() {

    const navBarTabs = [
      {
        name: 'Home',
        path: "/"
      },
      {
        name: 'Quiz',
        path: "/quiz"
      },
      {
        name: 'Day Review',
        path: "/day"
      },
      {
        name: 'Overview',
        path: "/overview"
      }
    ];

    if (this.props.auth.isAuthenticated) {

      return navBarTabs.map((tab, index) => {
        return (
          <NavLink
            className="nav-link"
            exact to={tab.path}
            key={index}
          >
            <li className="nav-item">{tab.name}</li>
          </NavLink>
        );
      });
    } else {
      return (
        <NavLink
          className="nav-link"
          exact to={navBarTabs[0].path}
        >
          <li className="nav-item">{navBarTabs[0].name}</li>
        </NavLink>
      )
    }

  }

  renderAuthButtons() {
    if (this.props.auth.isAuthenticated) {
      return (
        <AppButton
          label='Log Out'
          handleClick={() => {
            this.props.logOut()
            this.props.history.push("/")
          }}
          variant='outline-primary'
        />
      )
    } else {
      return (
        <AppButton
          href="http://localhost:4000/auth/google"
          label='Log in with Google'
          variant='outline-danger'
        />
      )
    }
  }

  render() {
    return (
      <div>
        <ul className="nav nav-tabs" >
          {this.renderTabs()}
          {this.renderAuthButtons()}
        </ul>
      </div >
    );
  }
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
};

export default connect(mapStateToProps, { logOut })(withRouter(NavBar));
