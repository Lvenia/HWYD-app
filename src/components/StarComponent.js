import React from 'react';
import Icon from './common/Icons/Icon';
import Wrapper from './common/Wrapper';
import Col from 'react-bootstrap/Col';

const StarComponent = ({
  description,
  highlight,
  starRate,
  getHoveredStarRate,
  handleClick
}) => {

  return (
    <Col>
      <Wrapper
        highlight={highlight(starRate)}
        onClick={() => handleClick(starRate)}
      >
        <div>
          <Icon
            size="50px"
            highlight={highlight(starRate)}
            icon="fa-star"

            handleMouseEnter={() => {getHoveredStarRate(starRate)}}
            handleMouseLeave={() => {
              getHoveredStarRate(0)
              console.log('mouse leave')
            }
            }
          />
          <p>{description}</p>
        </div>
      </Wrapper>
    </Col>
  );
};

export default StarComponent;
