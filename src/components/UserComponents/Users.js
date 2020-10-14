import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { ListGroup, Button } from 'react-bootstrap';

import { crateUser, addNewUser, showUser } from '../../actions'

class Users extends React.Component {

  state = {
    name: '',
    age: ''
  }

  handleUserAd(name, age) {
    const localPayload = {
      name,
      age
    };
    this.props.crateUser(localPayload);
    this.props.addNewUser();
  }

  handleSubmit() {
    const { name, age } = this.state;
    const localPayload = {
      name,
      age
    };
    this.props.crateUser(localPayload);
    this.props.addNewUser();
    this.setState({ name: '', age: '' });
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
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <h4>Hi, I am User component.</h4>
        <h5>Press button to add user to the list or complete the form below.</h5>
        {this.renderAddUserButtons()}
        <form>
          <div className="form-group m-2">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
            />
            <br />
            <label>Age</label>
            <input
              type="number"
              className="form-control"
              value={this.state.age}
              onChange={e => this.setState({ age: e.target.value })}
            />
            <br />
            <Button
              className="float-right m-3"
              onClick={() => this.handleSubmit()}
            >
              Submit
              </Button>
          </div>
        </form>
        <br />
        <h5>To show user details choose one from the list.</h5>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);