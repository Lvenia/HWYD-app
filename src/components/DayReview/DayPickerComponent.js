import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const DayPickerComponent = ({ handleDayClick, selectedDay }) => {
  return (
    <div>
      <DayPicker
        selectedDays={selectedDay}
        onDayClick={handleDayClick}
      />
      <p
        style={{
          paddingLeft: "1.5rem",
          textAlign: "left",
          fontStyle: "italic",
          fontSize: "small",
          fontWeight: "200",
          position: "inherit"
        }}
      >
        {'=> Click to select another day <='}
      </p>
    </div>
  );
};

export default DayPickerComponent