import styled from 'styled-components';
import ContainerBasic from 'react-bootstrap/Container';
import RowBasic from 'react-bootstrap/Row';
import CarouselBasic from 'react-bootstrap/Carousel';

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

export const CarouselCaption = styled(CarouselBasic.Caption)`
  top: 0;
  padding: 0;

  h4{
    color: white;
    font-weight: 300;
    margin: 10px;
  }

  table {
    width: 100%;
    display: inline-table;
  }

  td {
  text-align: center;
  padding: 0px 5px;
}

th {
  padding-bottom: 5px;
}
small {
  margin-top:10px;
    line-height: 1.3;
    display: inline-block;
}

`
