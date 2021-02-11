import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import * as actions from '../actions';
import AppButton from './AppButton';
import DropdownComponent from './DropdownComponent';
import HamburgerMenu from './HamburgerMenu';
import { NavBarRow, Menu } from './common/Layout/Layout';

class NavBar extends React.Component {
  state = {
    hamburgerOpen: false,
  }

  handleClick = () => {
    const { hamburgerOpen } = this.state;
    this.setState({ hamburgerOpen: !hamburgerOpen });
  }

  renderTabs() {
    const navBarTabs = [
      {
        name: 'Home',
        path: '/',
      },
      {
        name: 'Quiz',
        path: '/quiz',
      },
      {
        name: 'Day Review',
        path: '/day',
      },
      {
        name: 'Overview',
        path: '/overview',
      },
    ];

    const { auth } = this.props;
    if (auth.isAuthenticated) {
      return navBarTabs.map((tab) => (
        <NavLink
          className="nav-link"
          exact
          to={tab.path}
          key={tab.name}
        >
          <li className="nav-item">{tab.name}</li>
        </NavLink>
      ));
    }
    return (
      <NavLink
        className="nav-link"
        exact
        to={navBarTabs[0].path}
      >
        <li className="nav-item">{navBarTabs[0].name}</li>
      </NavLink>
    );
  }

  renderLoginLogoutLabel = () => {
    const { auth } = this.props;
    return (
      <>
        <span>
          {auth.user.givenName}
          {auth.user.familyName}
        </span>

        <img
          src={auth.user.avatar}
          alt="avatar"
          style={{
            width: '20%',
            borderRadius: '50%',
            padding: '5px',
          }}
        />
      </>
    );
  }

  renderAuthButtons = () => {
    const { auth, logOut, history } = this.props;
    if (auth.isAuthenticated) {
      return (
        <DropdownComponent
          style={{
            width: '200px',
            display: 'flex',
            alignItems: 'center',
            padding: '0px 10px',
          }}
          options={[{ value: 'LogOut', label: 'Log Out' }]}
          onSelect={() => {
            logOut();
            history.push('/');
          }}
          variant="link"
          defaultLabel={this.renderLoginLogoutLabel()}
        />
      );
    }
    return (
      <div style={{ marginTop: '1.5px' }}>
        <AppButton
          href={`${process.env.REACT_APP_BASE_URL}/auth/google`}
          label="Log in with Google"
          variant="outline-danger"
        />
      </div>
    );
  }

  render() {
    const { hamburgerOpen } = this.state;
    return (
      <NavBarRow>
        <HamburgerMenu
          isOpened={hamburgerOpen}
          onClick={this.handleClick}
        />
        <Menu
          onClick={this.handleClick}
          className="nav nav-tabs"
          isOpened={hamburgerOpen}
        >
          {this.renderTabs()}
        </Menu>

        { this.renderAuthButtons()}
      </NavBarRow>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  logOut: actions.logOut,
})(withRouter(NavBar));
