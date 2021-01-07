import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from '../actions';
import AppButton from '../components/AppButton';
import DropdownComponent from './DropdownComponent';
import HamburgerMenu from './HamburgerMenu';
import { withRouter } from 'react-router-dom';
import {NavBarRow, Menu } from './common/Layout/Layout';


class NavBar extends React.Component {

  state = {
    hamburgerOpen: false
  }

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

  renderLoginLogoutLabel = () => {
    return (
      <>
        <span>
          {this.props.auth.user.givenName} {this.props.auth.user.familyName}
        </span>

        <img
          src={this.props.auth.user.avatar}
          alt={"avatar"}
          style={{
            width: "20%",
            borderRadius: "50%",
            padding: "5px"
          }}
        />
      </>
    )
  }

  renderAuthButtons = () => {
    if (this.props.auth.isAuthenticated) {
      return (
        <DropdownComponent
          style={{
            width: "200px",
            display: "flex",
            alignItems: "center",
            padding: "0px 10px"
          }}
          options={[{ value: "LogOut", label: "Log Out" }]}
          onSelect={() => {
            this.props.logOut()
            this.props.history.push("/")
          }}
          variant="link"
          defaultLabel={this.renderLoginLogoutLabel()}
        />
      )
    } else {
      return (
        <div style={{ marginTop: "1.5px" }}>
          <AppButton
            href="http://localhost:4000/auth/google"
            label='Log in with Google'
            variant='outline-danger'
          />
        </div>
      );
    }
  }

  handleClick = () => {
    this.setState({ hamburgerOpen: !this.state.hamburgerOpen })
  }

  render() {
    return (
      <NavBarRow>
        <HamburgerMenu
          isOpened={this.state.hamburgerOpen}
          onClick={this.handleClick}
        />
        <Menu
          onClick={this.handleClick}
          className="nav nav-tabs"
          isOpened={this.state.hamburgerOpen}
        >
          {this.renderTabs()}
        </Menu>

        { this.renderAuthButtons()}
      </NavBarRow>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
};

export default connect(mapStateToProps, { logOut })(withRouter(NavBar));
