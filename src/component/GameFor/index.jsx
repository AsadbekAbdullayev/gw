import React from 'react';
import { Container } from './style';

const GameFor = () => {
  return <Container>{window?.location?.pathname?.slice(1)}</Container>;
};

export default GameFor;
