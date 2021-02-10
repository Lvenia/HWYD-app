import React from 'react';
import Icon from '../common/Icons/Icon';
import Wrapper from '../common/Wrapper';

const StarComponent = ({
  description,
  starRate,
  hoveredStarRate,
  readOnly = false,
  handleClick,
  handleStarHover,
  isClicked,
}) => {
  let onMouseEnter;
  let onMouseLeave;
  let onClick;
  const shouldBeHighlighted = starRate <= hoveredStarRate;

  if (!readOnly) {
    onClick = () => handleClick(starRate);
    onMouseEnter = () => handleStarHover(starRate);
    onMouseLeave = () => handleStarHover(0);
  }

  return (
    <Wrapper
      isHighlighed={shouldBeHighlighted}
      onClick={onClick}
      isClicked={isClicked}
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

  );
};

export default StarComponent;
