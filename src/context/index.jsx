import React from 'react';
import { StyledContexPovider } from './StyleContext';
import { UserContexPovider } from './UserContext';
const MainContexProvider = ({ children }) => {
  return (
    <StyledContexPovider>
      <UserContexPovider>{children}</UserContexPovider>
    </StyledContexPovider>
  );
};

export default MainContexProvider;
