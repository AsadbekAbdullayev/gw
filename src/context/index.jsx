import React from 'react';
import { StyledContexPovider } from './StyleContext';
const MainContexProvider = ({ children }) => {
  return <StyledContexPovider>{children}</StyledContexPovider>;
};

export default MainContexProvider;
