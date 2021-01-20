import React from 'react';
import { Container, Row, Heading, Paragraph } from './common/Layout/Layout';
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
    const userName = this.props.auth.user ? this.props.auth.user.givenName : 'there';

    return (
      <Container>
        <Heading >Hi {userName}! How Was Your Day?</Heading>
        <Paragraph>Take 5 minutes to notice how simple daily actions affect your perception of the 1/365th of the year. </Paragraph>
        <Row>
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
