import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { ListGroup, Button } from 'react-bootstrap';

import { createUser } from '../../actions';

class Users extends React.Component {
  // TODO: REMOVE UNUSED HANDLERS, STATIC BUTTONS ETC
  state = {
    name: '',
    age: ''
  }

  handleSubmit = () => {
    const { name, age } = this.state;
    const localPayload = {
      name,
      age
    };
    this.props.createUser(localPayload);
    this.setState({ name: '', age: '' });
  }

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

  showHint() {
    if (this.props.users.length > 0) {
      return (
        <h5 className="m-2">To show user details choose one from the list.</h5>
      )
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <h4>Hi, I am User component.</h4>
        <h5>Complete the form below to add new user.</h5>
        {/* {this.renderAddUserButtons()} */}
        <form style={{ display: "block", overflow: "hidden" }}>
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
            {/* To simplify */}
            <Button
              className="float-right m-2"
              onClick={this.handleSubmit}
            >
              Submit
              </Button>
          </div>
        </form>
        {this.showHint()}
        <ListGroup>
          {this.renderUserList()}
        </ListGroup>
      </div>
    );
  }
}

const mapDispatchToProps = {
  createUser
};

const mapStateToProps = ({ userState }) => {
  return {
    user: userState.currentUser,
    users: userState.users
  };
};

export default connect(mapStateToProps, { createUser })(Users);