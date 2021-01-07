import styled from 'styled-components';

const Wrapper = styled.div`
  color: "#3c3c3";
  text-align: center;
  width: 120px;
  border: 1px solid red;

  @keyframes fade-in-keyframes {
  from {opacity: 0}
  to {opacity: 1}
}

span {
    color: ${props => props.isHighlighed ? '#ffff4d' : 'none'};
    animation:${props => props.isClicked ? 'fade-in-keyframes 1s' : 'none'};
  }
`
export default Wrapper;