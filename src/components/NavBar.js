import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

import { plusOne, minusOne, createUser, addUser } from '../actions'

class NavBar extends React.Component {

  componentDidMount() {
    const user = this.props.createUser('Johan', 'Norway', 30);
    const users = this.props.addUser(user.payload)
  }

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

          <button onClick={() => this.props.plusOne()}>Add</button>
          <button onClick={() => this.props.minusOne()}>Substract</button>
          <button onClick={() => this.props.createUser('Alex', 'Canada', 42)}>Change user</button>

        </ul>
        {/* <h4>Current count is {this.props.count}</h4>
        <h4>Current user is {this.props.user.name} from {this.props.user.country}, age {this.props.user.age}.</h4> */}
      </div>
    );
  }
}

const mapDispatchToProps = {
  plusOne,
  minusOne,
  createUser,
  addUser
};


const mapStateToProps = (state, ownProps) => {
  return {
    count: state.testState.counter,
    user: state.testState.person,
    users: state.testState.persons
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);