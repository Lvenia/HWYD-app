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

  // renderUserDetales() {
  //   if (this.props.user.id === 0) {
  //     return <div>User array is empty. Please click button to add user to array</div>
  //   }
  //   return (
  //     <div>
  //       <h4>Curren user is {this.props.user.name}, age {this.props.user.age}.</h4>
  //       <h4>Number of users: {this.props.users.length}.</h4>
  //     </div>
  //   )
  // }


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
        {/* {this.renderUserDetales()}
        <button onClick={() => this.props.showUser(2)}>show user id 2</button> */}
        <h5>To show user detales choose one from the list</h5>
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