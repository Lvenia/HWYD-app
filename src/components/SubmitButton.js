import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';

import { submitAnswers } from '../actions';

const SubmitButton = ({ submitAnswers, label, localState, locationChange, handleClick }) => {
  return (
    <Button
      variant="primary"
      onClick={() => {
        submitAnswers(localState);
        handleClick();
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
