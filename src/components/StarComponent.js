import React, { useState } from 'react';
import Icon from './common/Icons/Icon';
import Wrapper from './common/Wrapper';
import Col from 'react-bootstrap/Col';

const StarComponent = ({ description, rate, handleClick }) => {

  const [hover, setHover] = useState(false);

  return (
    <Col
      key={rate}
      onClick={() => handleClick(rate)}
    >
      <Wrapper hover={hover}>
        <div>
          <Icon
            icon={hover ? "fa-star" : "fa-star-o"}
            size="50px"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          />
          <p>{description}</p>
        </div>
      </Wrapper>
    </Col>
  );
};

export default StarComponent;
