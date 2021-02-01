import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { Heading, CarouselItem, CarouselCaption } from '../common/Layout/Layout';

const RulesModal = ({ showModal, hideModal }) => {

  return (
    <Modal
      show={showModal}
      onHide={hideModal}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <p>See The Guidelines</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Carousel interval={60000}>
          <CarouselItem >
            <div alt="First slide" />
            <CarouselCaption>
              <Heading> General Idea</Heading>
              <hr />
              <p> Each category - Sleep, Nutrition, Hydration and Activities - may bring you 30 points.</p>
              <p> Every beneficial deed rates as "+10" points while every opposite one "-10" points.</p>
              <hr />
              <p> Week Review show points gained in each category per day. </p>
              <p> Month Review shows the total points per day. </p>
              <p> Year Review shows average points per month. </p>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem>
            <div alt="Second slide" />
            <CarouselCaption>
              <Heading> Sleep and Nutrition Category </Heading>
              <hr />
              <table>
                <thead>
                  <tr>
                    <th>QUESTION</th>
                    <th>YES</th>
                    <th>NO </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> Have you slept well?</td>
                    <td>+10</td>
                    <td>-10</td>
                  </tr>
                  <tr>
                    <td>Have you wake up in the night?</td>
                    <td>-10</td>
                    <td>+10</td>
                  </tr>
                  <tr>
                    <td>Snoozing in the morning?</td>
                    <td>-10</td>
                    <td>+10</td>
                  </tr>
                  <tr>
                    <td> Have you eaten regularly?</td>
                    <td>+10</td>
                    <td>-10</td>
                  </tr>
                  <tr>
                    <td>Skipped meal?</td>
                    <td>-10</td>
                    <td>+10</td>
                  </tr>
                  <tr>
                    <td>Junk food?</td>
                    <td>-10</td>
                    <td>+10</td>
                  </tr>
                </tbody>
              </table>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem>
            <div alt="Third slide" />
            <CarouselCaption>
              <Heading> Hydration Category Scoring</Heading>
              <hr />
              <table className="alignCenter">
                <thead>
                  <tr>
                    <th>GLASSES OF WATER</th>
                    <th>POINTS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0 glasses</td>
                    <td>-30</td>
                  </tr>
                  <tr>
                    <td>1-3 glasses</td>
                    <td>+10</td>
                  </tr>
                  <tr>
                    <td>4-5 glasses</td>
                    <td>+20</td>
                  </tr>
                  <tr>
                    <td>6 and more</td>
                    <td>+30</td>
                  </tr>
                </tbody>
              </table>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem >
            <div alt="Fourth slide"
            />
            <CarouselCaption>
              <Heading> Activities Category</Heading>
              <hr />
              <p> Each pleasant activity gets "+" sign and each unpleasant - "-".</p>
              <p> Share of pleasant activities is calculated. If unpleasant activities pravailed you may end up with  negative points</p>
              <table
                className="alignCenter"
              >
                <thead>
                  <tr>
                    <th>SHARE</th>
                    <th>POINTS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0 - 1/3</td>
                    <td >+/- 10</td>
                  </tr>
                  <tr>
                    <td>1/3 - 2/3</td>
                    <td> +/- 20
                  </td>
                  </tr>
                  <tr>
                    <td> 2/3 - 3/3 </td>
                    <td>+/- 30</td>
                  </tr>
                </tbody>
              </table>
              <small> if total amount is 9H, 6H pleasant and 3H unpleasant than (+6-3)/9 = 1/3 == 10 points </small>
            </CarouselCaption>
          </CarouselItem>
        </Carousel>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={hideModal}>
          Close
          </Button>
      </Modal.Footer>
    </Modal>
  )
};

export default RulesModal;
