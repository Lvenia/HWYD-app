import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';
import AppButton from './AppButton';

class Start extends React.Component {


  renderGetStartedButton = () => {
    if (!this.props.auth.user) {
      return (
        <AppButton
          variant="outline-primary"
          label="Click here to log in and get started!"
          href="http://localhost:4000/auth/google"
        />
      )
    }
    return (
      <AppButton
        variant="primary"
        label="Start the quiz!"
        handleClick={() => this.props.history.push('/quiz')}
      />
    )
  }

  render() {
    return (
      <Container>
        <Row className="m-3 justify-content-md-center" >
          <h1 >Hi there! How Was Your Day?</h1>
        </Row>
        <Row className="justify-content-md-center" >
          <h4>Take 5 minutes to spot how simple daily actions affect your perception of the 1/365th of the year. </h4>
        </Row>
        <Row className="justify-content-md-center" >
          {this.renderGetStartedButton()}
        </Row>
      </Container >
    );
  }
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
};

export default connect(mapStateToProps)(Start);
