import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';

import { submitAnswers } from '../actions';

const SubmitButton = ({ submitAnswers, label, localState }) => {
  //cb, to call after submitansvers
  return (
    <Button
      variant="primary"
      onClick={() => {
        submitAnswers(localState);
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
