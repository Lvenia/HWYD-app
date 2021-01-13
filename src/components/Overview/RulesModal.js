import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { Heading, Paragraph, CarouselCaption } from '../common/Layout/Layout';

const RulesModal = ({ showModal, hideModal }) => {

  return (
    <Modal
      show={showModal}
      onHide={hideModal}
    >
      <Modal.Header closeButton>
        <Modal.Title>See how the points have been granted </Modal.Title>
      </Modal.Header>
      <Modal.Body>


        <Carousel interval={50000}>
          <Carousel.Item >
            <div
              style={{ width: "100%", height: "50vh", backgroundColor: "gray" }}
              alt="First slide"
            />
            <CarouselCaption>
              <Heading> General Idea</Heading>
              <hr />
              <Paragraph> Each category - Sleep, Nutrition, Hydration and Activities - may bring you 30 points.</Paragraph>
              <Paragraph> Every beneficial deed rates as "+10" points while every opposite one "-10" points.</Paragraph>
              <Paragraph> Day Review and Week Review show points gained in each category per day </Paragraph>
              <Paragraph> Month Review shows the total points per day </Paragraph>
              <Paragraph> Year Review shows average points per month </Paragraph>
            </CarouselCaption>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{ width: "100%", height: "50vh", backgroundColor: "gray" }}
              alt="Third slide"
            />
            <CarouselCaption>
              <Heading> Sleep and Nutrition Category Scoring</Heading>
              <hr />
              <table>
                <tr>
                  <th>
                    QUESTION
                    </th>
                  <th>
                    YES
                    </th>
                  <th>
                    NO
                    </th>
                </tr>
                <tr>
                  <td>
                    Have you slept well?
                    </td>
                  <td >
                    +10
                    </td>
                  <td>
                    -10
                    </td>
                </tr>
                <tr>
                  <td>
                    Have you wake up in the night?
                    </td>
                  <td>
                    -10
                    </td>
                  <td>
                    +10
                    </td>
                </tr>
                <tr>
                  <td>
                    Snoozing in the morning?
                    </td>
                  <td>
                    -10
                    </td>
                  <td>
                    +10
                    </td>
                </tr>
                <tr>
                  <td>
                    Have you eaten regularly?
                    </td>
                  <td >
                    +10
                    </td>
                  <td>
                    -10
                    </td>
                </tr>
                <tr>
                  <td>
                    Skipped meal?
                    </td>
                  <td>
                    -10
                    </td>
                  <td>
                    +10
                    </td>
                </tr>
                <tr>
                  <td>
                    Junk food?
                    </td>
                  <td>
                    -10
                    </td>
                  <td>
                    +10
                    </td>
                </tr>
              </table>
            </CarouselCaption>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{ width: "100%", height: "50vh", backgroundColor: "gray" }}
              alt="Third slide"
            />
            <CarouselCaption>
              <Heading> Hydration Category Scoring</Heading>
              <hr />
              <table>
                <tr>
                  <th >
                    GLASSES OF WATER
                    </th>
                  <th>
                    POINTS
                    </th>
                </tr>
                <tr>
                  <td>
                    0 glasses
                    </td>
                  <td >
                    -30
                   </td>
                </tr>
                <tr>
                  <td>
                    1-3 glasses
                    </td>
                  <td>
                    +10
                  </td>
                </tr>
                <tr>
                  <td>
                    4-5 glasses
                    </td>
                  <td>
                    +20
                    </td>
                </tr>
                <tr>
                  <td>
                    6 and more
                    </td>
                  <td >
                    +30
                    </td>
                </tr>
              </table>
            </CarouselCaption>
          </Carousel.Item>
          <Carousel.Item >
            <div
              style={{ width: "100%", height: "50vh", backgroundColor: "gray" }}
              alt="Fourth slide"
            />
            <CarouselCaption>
              <Heading> Activities Category</Heading>
              <hr />
              <Paragraph> Each pleasant activity gets "+" sign and each unpleasant - "-".</Paragraph>
              <Paragraph> Share of pleasant activities is calculated. If unpleasant activities pravailed you may end up with  negative points</Paragraph>
              <table>
                <tr>
                  <th >
                    SHARE
                    </th>
                  <th>
                    POINTS
                    </th>
                </tr>
                <tr>
                  <td>
                   0 - 1/3
                    </td>
                  <td >
                    +/- 10
                   </td>
                </tr>
                <tr>
                  <td>
                    1/3 - 2/3
                    </td>
                  <td>
                    +/- 20
                  </td>
                </tr>
                <tr>
                  <td>
                   2/3 - 3/3
                    </td>
                  <td>
                    +/- 30
                    </td>
                </tr>
              </table>
              <small> if total amount is 9H, 6H pleasant and 3H unpleasant than (+6-3)/9 = 1/3 == 10 points </small>

            </CarouselCaption>
          </Carousel.Item>
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
