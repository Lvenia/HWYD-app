import styled from 'styled-components';

const Wrapper = styled.div`
  color: "#FFDF00";
  text-align: center;
  width: 120px;

  @keyframes fade-in-keyframes {
  from {opacity: 0}
  to {opacity: 1}
}

span {
    color: ${props => props.isHighlighed ? '#FFDF00' : 'none'};
    animation:${props => props.isClicked ? 'fade-in-keyframes 1s' : 'none'};
  }
`
export default Wrapper;