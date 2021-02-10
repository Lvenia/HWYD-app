import React from 'react';
import DayPickerStyled from '../common/DayPickerComponent';
import { Paragraph } from '../common/Layout/Layout';

const DayPickerComponent = ({ handleDayClick, selectedDay }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flexGrow: '1',
    }}
  >
    <DayPickerStyled
      selectedDays={selectedDay}
      onDayClick={handleDayClick}
    />
    <Paragraph
      style={{
        fontStyle: 'italic',
        fontWeight: '200',
        position: 'inherit',
        margin: '0px 0px 5px 0px',
      }}
    >
      <small>...click to select another day</small>
    </Paragraph>
  </div>
);

export default DayPickerComponent;
