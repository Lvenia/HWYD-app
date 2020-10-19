import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Start extends React.Component {

  state = {
    rate: 0,
    description: ''
  }

  componentDidMount() {
    console.log(this.state)
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  renderStars() {

    const stars = [{
      rate: 1,
      description: 'tough'
    },
    {
      rate: 2,
      description: 'challenging'
    },
    {
      rate: 3,
      description: 'acceptable'
    },
    {
      rate: 4,
      description: 'pleasant'
    },
    {
      rate: 5,
      description: 'amazing'
    }];

    return stars.map(star => {
      return (
        <Col key={star.rate}>
          <div style={{ textAlign: "center" }}
            onClick={(event) => {
              this.setState({ rate: star.rate, description: star.description })
              console.log(event)
            }}
          >

            {/* <button>
              Star
            </button> */}

            <svg
              width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-star" fill="currentColor" xmlns="http://www.w3.org/2000/svg" fontSize="32">
              <path fillRule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
            </svg>

            <p>{star.description}</p>
          </div>
        </Col>
      )
    })


  }
  render() {
    return (
      <Container>
        <Col>
          <Row className="justify-content-md-center " >
            How Was Your Day?
        </Row>
          <Row className="justify-content-md-center" >
            {this.renderStars()}
          </Row>
        </Col>
      </Container >
    );
  }
}

export default Start;