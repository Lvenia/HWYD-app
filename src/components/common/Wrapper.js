import styled from 'styled-components';


const Wrapper = styled.div`
  color: #3c3c3;
  text-align: center;
  font-weight: ${props => props.hover ? 'bold' : 'none'};
`
export default Wrapper;