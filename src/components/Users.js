import React from 'react';
import { connect } from 'react-redux';

import { crateUser, addNewUser } from '../actions'

class Users extends React.Component {

  componentDidMount() {
    this.props.crateUser('Alex', 42);
    this.props.addNewUser()
  }

  handleUserAd(name, age) {
    this.props.crateUser(name, age);
    this.props.addNewUser()
  }

  renderAddUserButtons() {

    const users = [
      {
        name: 'Ann',
        age: 30
      },

      {
        name: 'Caren',
        age: 28
      },

      {
        name: 'Mark',
        age: 22
      }
    ];

    return users.map(user => {
      return (
        <button
          className="m-2"
          onClick={() => this.handleUserAd(user.name, user.age)}
        >
          Add {user.name}
        </button>
      );
    })
  };

  render() {
    return (
      <div>
        <div>Hi, I am User component</div>
        {this.renderAddUserButtons()}
      </div>
    );
  }
}

const mapDispatchToProps = {
  crateUser,
  addNewUser
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.currentUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);