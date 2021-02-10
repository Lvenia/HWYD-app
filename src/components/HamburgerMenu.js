import React from 'react';
import { Hamburger } from './common/Layout/Layout';

const HamburgerMenu = ({
  onClick,
  isOpened,
}) => (
  <Hamburger
    isOpened={isOpened}
    onClick={onClick}
  >
    <div className="top" />
    <div className="middle" />
    <div className="bottom" />
  </Hamburger>
);

export default HamburgerMenu;
