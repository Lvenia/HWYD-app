import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { editUser } from '../../actions';

function EditUserDetails({ user, editUser, history }) {

  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);


  const handleSubmit = () => {
    const localPayload = {
      name,
      age
    };
    editUser(user.id, localPayload);
    history.push('/users');
  }

  if (!user) return <div>Loading...</div>

  return (
    <div>
      <h4>Edit user id {user.id}</h4>
      <form>
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
          <Link
            className="m-3"
            to={'/users'}
          >
            Cancel
              </Link>
          <Button
            className="m-3"
            onClick={handleSubmit}
          >
            Submit
              </Button>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.userState.users.find(u => u.id === Number(ownProps.match.params.id))
  };
};

export default connect(mapStateToProps, { editUser })(EditUserDetails);