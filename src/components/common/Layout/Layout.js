import styled from 'styled-components';
import ContainerBasic from 'react-bootstrap/Container';
import RowBasic from 'react-bootstrap/Row';
import CarouselBasic from 'react-bootstrap/Carousel';

export const Container = styled(ContainerBasic)`
  text-align: center;
  max-width: 850px;
  padding: 0px;
  font-family: Verdana, Helvetica, Arial, sans-serif;
  font-size: 16px;
`;

export const BarWrapper = styled.div`
  @media (max-width: 610px) {
     background-color: aliceblue;
     min-width: 500px;
     overflow-x: hidden;
  }
`

export const Row = styled(RowBasic)`
  text-align: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`
export const ButtonsRow = styled(RowBasic)`
  justify-content: space-between;
  margin: 16px 0px 0px;
  padding: 0;

  @media (max-width: 610px) {
     display: flex;
     flex-wrap: nowrap;
     flex-direction: row;
  }
`

export const NavBarRow = styled(RowBasic)`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dee2e6;
  align-items: center;
  margin: 0px 10px;
  flex-wrap: nowrap;

  @media (max-width: 610px) {
     height: ${props => props.isOpened ? "200px" : "auto"} ;
  }
`

export const Menu = styled.ul`
  display: flex;
  border-bottom: none;

  @media (max-width: 610px) {
    position: absolute;
    top: 40px;
    left: 0px;
    bottom: 0px;
    width: 100%;
    background-color: whitesmoke;
    display: ${props => props.isOpened ? "flex" : "none"} ;
    flex-direction: column;

      .nav-link.active {
        border: none;
      }
}
`
export const Heading = styled.h1`
  text-align: center;
  font-size: 20px;
  margin: 15px 0px;
`
export const Paragraph = styled.h4`
  text-align: center;
  font-size: 16px;
  margin: 15px 0px;
`
export const Hamburger = styled.div`
  display: none;
  width: 24px;
  height: 24px;
  justify-content: ${props => props.isOpened ? "center" : "space-around"};
  align-content: center;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 610px) {
    display: flex;
  }

  div {
    display: flex;
    width: 22px;
    height: 2px;
    background-color: #3c3c3c;
    transition: transform 0.3s
  }

  ${props => props.isOpened && `
    .middle {
      display: none;
    }

    .top {
      transform: translate(0px, 1px) rotate(45deg);
    }

    .bottom {
      transform: translate(0px, -1px) rotate(-45deg);
    }
  `
  }
`

export const CarouselItem = styled(CarouselBasic.Item)`
  color: blue;
  width: 100%;
  height: 450px;
  background-color: gray;
`

export const CarouselCaption = styled(CarouselBasic.Caption)`
  top: 0;
  padding: 0;
  overflow: scroll;
  text-align: left;

.alignCenter {
  text-align: center;
}
  h4{
    color: white;
    font-weight: 300;
    margin: 10px;
  }

  table {
    width: 100%;
    display: inline-table;
    margin: 1%;
  }

  td {
    line-height: 180%;
    }

  th {
  padding-bottom: 5px;
  line-height: 180%;
  border-bottom: 1px solid rgba(0,0,0,.1);
  }

  small {
  margin-top:10px;
    line-height: 1.3;
    display: inline-block;
  }

`


