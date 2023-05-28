import React from 'react';
import { Container, Card } from './style';

const GameFor = () => {
  return (
    <Container>
      {/* {window?.location?.pathname?.slice(1)} */}
      <Container.Flex>
        <Card />
        <Card />
        <Card />
        <Card />
      </Container.Flex>
    </Container>
  );
};

export default GameFor;
