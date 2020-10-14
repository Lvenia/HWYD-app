import React from 'react';
import { NavLink } from 'react-router-dom';

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
  }

  render() {
    return (
      <div>
        <ul className="nav nav-tabs" >
          {this.renderButtons()}
        </ul>
      </div>
    );
  }
}


export default NavBar;