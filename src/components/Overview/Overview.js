import React from 'react';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';

import WeekOverview from './WeekOverview';
import Container from '../common/Container/Container';
import DropdownComponent from '../DropdownComponent';
import { TIME_PERIOD_OPTIONS, THIS_WEEK } from '../../constants';
import { getOverviewAnswers } from '../../actions';

class Overview extends React.Component {
  state = {
    selectedPeriod: '', //thisWeek, lastWeek
  }

  //on firs render make a request to serwer to reciewe current weeks data

  componentDidMount = async () => {
    console.log('Just MOunted')
    await this.props.getOverviewAnswers(THIS_WEEK.value)
  }



  //overview will contain toggle buttons, which will decide what summary willbe rendered: last 7 days, last 4 weeks, last 13 weeks, last 52 weeks;


  renderContent = () => {
    //if this.state.selectedPeriod inclues "week" show WeekOverview, pass response as a props
    return (
      <WeekOverview
        selectedPeriod={this.state.selectedPeriod}

      />
    )
    ////if this.state.selectedPeriod inclues "mounth" show MounthOverview, pass response as a props
    ////if this.state.selectedPeriod inclues "year" show YearOverview, pass response as a props
  }

  handleDropdownSelect = (option) => {
    this.setState({ selectedPeriod: option.value })
    this.props.getOverviewAnswers(option.value)
  }

  render() {
    return (
      <Container>
        <Row className="m-3 justify-content-md-center" >
          <h1 >This is the current week overview!</h1>
        </Row>

        <Row className="justify-content-md-center">
          <DropdownComponent
            options={TIME_PERIOD_OPTIONS}
            defaultLabel="Select another time period"
            value={this.state.selectedPeriod}
            onSelect={this.handleDropdownSelect}
          />
        </Row>

          {this.renderContent()}

      </Container>

    )
  }
}

export default connect(null, { getOverviewAnswers })(Overview);


//the whole overview component should has two purposes - to show the chart and to change chart based on the selected option

//the best option would be to dispatch action and change the redux state here
//cahrt component would recieve the data, it will perform calculations and return a chart