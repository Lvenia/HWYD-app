import styled from 'styled-components';

const Wrapper = styled.div`
  color: #3c3c3;
  text-align: center;

  span {
    color: ${props => props.isHighlighed ? '#ffff4d' : 'none'}
  }
`
export default Wrapper;
