import styled from 'styled-components';
import ContainerBasic from 'react-bootstrap/Container';
import RowBasic from 'react-bootstrap/Row';

export const Container = styled(ContainerBasic)`
  max-width: 850px;
  padding: 0px;
  border: 1px solid red;
`;

export const Row = styled(RowBasic)`
text-align: center;
justify-content: center;
margin: 0;
padding: 0;
border: 2px solid green;
`


export const Heading = styled.h1`
text-align: center;
font-size: 18px;
margin: 15px 0px;
border: 1px solid black;
`
export const Paragraph = styled.h4`
text-align: center;
font-size: 14px;
border: 1px solid black;
margin: 15px 0px;
`
