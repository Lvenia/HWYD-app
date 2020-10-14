import React from 'react';
import { connect } from 'react-redux';
import { deleteUser, editUser } from '../../actions';

class UserDetails extends React.Component {
  render() {
    if (!this.props.user) return null;

    return (
      <div className="m-2">
        <h4>User name: {this.props.user.name}.</h4>
        <h5>Age: {this.props.user.age}.</h5>
        <h5>Id: {this.props.user.id}.</h5>
        <br />
        <button
          className="btn btn-danger"
          onClick={() => {
            this.props.deleteUser(this.props.match.params.id);
            this.props.history.push('/users');
          }}
        >
          Delete
         </button>
        <button
          className="btn btn-warning m-3"
          onClick={() => {
            this.props.history.push(`/edit/${this.props.user.id}`)
          }}
        >
          Edit
          </button>
      </div>
    );
  }
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