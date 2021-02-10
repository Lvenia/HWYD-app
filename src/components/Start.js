import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Row,
  Heading,
  Paragraph,
} from './common/Layout/Layout';
import AppButton from './AppButton';

class Start extends React.Component {
  renderGetStartedButton = () => {
    const { auth, history } = this.props;
    if (!auth.user) {
      return (
        <AppButton
          variant="outline-primary"
          label="Click here to log in and get started!"
          href={`${process.env.REACT_APP_BASE_URL}/auth/google`}
        />
      );
    }
    return (
      <AppButton
        variant="primary"
        label="Start the quiz!"
        handleClick={() => history.push('/quiz')}
      />
    );
  }

  render() {
    const { auth } = this.props;
    const userName = auth.user ? auth.user.givenName : 'there';

    return (
      <Container>
        <Heading>
          Hi
          {' '}
          {userName}
          ! How Was Your Day?
        </Heading>
        <Paragraph>
          Take 5 minutes to notice how simple daily actions affect your perception
          of the 1/365th of the year.
        </Paragraph>
        <Row>
          {this.renderGetStartedButton()}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Start);
