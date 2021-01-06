import React from 'react';
import { connect } from 'react-redux';
import { Bar } from 'react-chartjs-2';

import { Container, Row, Paragraph, Heading } from '../common/Layout/Layout';
import SpinnerComponent from '../common/SpinnerComponent';
import DropdownComponent from '../DropdownComponent';
import {
  TIME_PERIOD_OPTIONS,
  THIS_WEEK
} from '../../constants';
import { getOverviewAnswers } from '../../actions';
import { getDataForLinearBarChart, getOptionsForLinearBarChart } from '../../utils';

class Overview extends React.Component {

  state = {
    selectedPeriod: THIS_WEEK.value
  }

  componentDidMount = async () => {
    await this.props.getOverviewAnswers(THIS_WEEK.value)
  }

  renderContent = () => {

    if (!this.props.data.length) {

      return (
        <Heading>No data for selected period</Heading>
      );
    }

    return (
      <Bar
        data={getDataForLinearBarChart(this.props.data, this.props.timePeriod)}
        options={getOptionsForLinearBarChart(this.props.timePeriod)}
      />
    );
  }

  handleDropdownSelect = (option) => {
    this.setState({ selectedPeriod: option.value })
    this.props.getOverviewAnswers(option.value)
  }

  render() {
    if (!this.props.data.length && this.props.isLoading) {
      return <SpinnerComponent />
    }

    return (
      <Container >
        {this.renderContent()}
        <Paragraph>{'=> Select another timeperiod <='} </Paragraph>
        <Row>
          <DropdownComponent
            options={TIME_PERIOD_OPTIONS}
            defaultLabel={THIS_WEEK.label}
            value={this.state.selectedPeriod}
            onSelect={this.handleDropdownSelect}
            style={{width: "200px", textAlign: "center"}}
          />
        </Row>
      </Container>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    data: state.overviewState.data,
    timePeriod: state.overviewState.timePeriod,
    isLoading: state.overviewState.isLoading
  }
};

export default connect(mapStateToProps, { getOverviewAnswers })(Overview);
