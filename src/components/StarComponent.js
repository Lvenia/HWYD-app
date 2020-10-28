import React from 'react';
import Icon from './common/Icons/Icon';
import Wrapper from './common/Wrapper';
import Col from 'react-bootstrap/Col';

const StarComponent = ({
  description,
  starRate,
  hoveredStarRate,

  handleClick,
  handleStarHover
}) => {

  const shouldBeHighlighted = starRate <= hoveredStarRate;

  const onClick = () => handleClick(starRate);
  const onMouseEnter = () => handleStarHover(starRate);
  const onMouseLeave = () => { handleStarHover(0) }

  return (
    <Col>
      <Wrapper
        isHighlighed={shouldBeHighlighted}
        onClick={onClick}
      >
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Icon
            size="50px"
            icon={shouldBeHighlighted ? 'fa-star' : 'fa-star-o'}
          />
          <p>{description}</p>
        </div>
      </Wrapper>
    </Col>
  );
};

export default StarComponent;
