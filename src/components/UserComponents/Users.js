import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { ListGroup, Button } from 'react-bootstrap';

import { createUser } from '../../actions';


function Users({ createUser, users }) {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = () => {
    const localPayload = {
      name,
      age
    };
    createUser(localPayload);
    setName('');
    setAge('');
  };

  const showHint = () => {
    if (users.length > 0) {
      return (
        <h5 className="m-2">To show user details choose one from the list.</h5>
      )
    }
  };

  const renderUserList = () => {
    return users.map(user => {
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


  return (
    <div className="container-fluid">
      <h4>Hi, I am User component.</h4>
      <h5>Complete the form below to add new user.</h5>
      <form style={{ display: "block", overflow: "hidden" }}>
        <div className="form-group m-2">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <br />
          <label>Age</label>
          <input
            type="number"
            className="form-control"
            value={age}
            onChange={e => setAge(e.target.value)}
          />
          <br />
          <Button
            className="float-right m-2"
            onClick={handleSubmit}
          >
            Submit
               </Button>
        </div>
      </form>
      {showHint()}
      <ListGroup>
        {renderUserList()}
      </ListGroup>
    </div>
  );
}

const mapStateToProps = ({ userState }) => {
  return {
    user: userState.currentUser,
    users: userState.users
  };
};

export default connect(mapStateToProps, { createUser })(Users);