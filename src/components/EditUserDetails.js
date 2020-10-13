import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { editUser } from '../actions';


class EditUserDetails extends React.Component {

  state = {
    name: null,
    age: null
  };

  handleSubmit() {
    if (this.state.name && this.state.age) {
      this.props.editUser(this.props.user.id, this.state.name, this.state.age);
    } else if (!this.state.name && !this.state.age) {
      this.props.history.push('/users');
    } else if (!this.state.name) {
      this.props.editUser(this.props.user.id, this.props.user.name, this.state.age);
    } else if (!this.state.age) {
      this.props.editUser(this.props.user.id, this.state.name, this.props.user.age);
    }
    this.props.history.push('/users');
  }

  render() {
    if (!this.props.user) return <div>Loading...</div>

    return (
      <div>
        <h4>Edit user id {this.props.user.id}</h4>
        <form>
          <div className="form-group m-2">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder={this.props.user.name}
              onChange={e => this.setState({ name: e.target.value })}
            />
            <br />
            <label>Age</label>
            <input
              type="number"
              className="form-control"
              placeholder={this.props.user.age}
              onChange={e => this.setState({ age: e.target.value })}

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
              onClick={() => this.handleSubmit()}
            >
              Submit
              </Button>
          </div>
        </form>

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.userState.users.find(u => u.id === Number(ownProps.match.params.id))
  }
};

const mapDispatchToprops = {
  editUser
}

export default connect(mapStateToProps, mapDispatchToprops)(EditUserDetails)