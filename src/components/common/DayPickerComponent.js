import styled from 'styled-components';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';


export const DayPickerStyled = styled(DayPicker)`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;
  border: 2px solid blue;


 .DayPicker-wrapper {
   padding: 0px;
   line-height: 1;
 }
 .DayPicker-Month {
   margin: 0px;
 }
`;