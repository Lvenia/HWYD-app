import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';

import { submitAnswers } from '../actions';

const SubmitButton = ({ submitAnswers, label, localState, locationChange }) => {
  return (
    <Button
      variant="primary"
      onClick={() => {
        submitAnswers(localState);
        if (locationChange) {
          locationChange()
        };
      }}
    >
      {label}
    </Button>
  );
};

const mapDispatchToProps = {
  submitAnswers
}
export default connect(null, mapDispatchToProps)(SubmitButton);
