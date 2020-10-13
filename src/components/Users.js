import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { ListGroup } from 'react-bootstrap';

import { crateUser, addNewUser, showUser } from '../actions'

class Users extends React.Component {

  handleUserAd(name, age) {
    this.props.crateUser(name, age);
    this.props.addNewUser();
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
          key={users.indexOf(user)}
          className="m-2"
          onClick={() => this.handleUserAd(user.name, user.age)}
        >
          Add {user.name}
        </button>
      );
    })
  };

  renderUserList() {

    return this.props.users.map(user => {
      return (
        <div key={user.id}>
          <ListGroup.Item>
            {user.name}
            <Link
              to={`/user/${user.id}`}
              className="float-right"
            >
              Show details
             </Link>
          </ListGroup.Item>
        </div >
      )
    })

  }

  render() {

    return (
      <div>
        <h5>Hi, I am User component. Press button to add user to the list.</h5>
        {this.renderAddUserButtons()}
        <h5>To show user details choose one from the list</h5>
        <br />
        <ListGroup>
          {this.renderUserList()}
        </ListGroup>
      </div>
    );
  }
}

const mapDispatchToProps = {
  crateUser,
  addNewUser,
  showUser
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.userState.currentUser,
    users: state.userState.users
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);