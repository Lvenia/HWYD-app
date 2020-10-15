import React from 'react';
import { connect } from 'react-redux';
import { deleteUser, editUser } from '../../actions';

function UserDetails({ deleteUser, history, user, match }) {

  const handleClick = () => {
    deleteUser(match.params.id);
    history.push('/users');
  }

  if (!user) return null;
  return (
    <div className="m-2">
      <h4>User name: {user.name}.</h4>
      <h5>Age: {user.age}.</h5>
      <h5>Id: {user.id}.</h5>
      <br />
      <button
        className="btn btn-danger"
        onClick={handleClick}
      >
        Delete
         </button>
      <button
        className="btn btn-warning m-3"
        onClick={() => history.push(`/edit/${user.id}`)}
      >
        Edit
          </button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.userState.users.find(u => {
      return u.id === Number(ownProps.match.params.id)
    })
  };
};

const mapDispatchToProps = {
  deleteUser,
  editUser
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);