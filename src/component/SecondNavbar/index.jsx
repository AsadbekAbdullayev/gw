import React from 'react';
import { Wrapper } from './style';
const SecondNavbar = () => {
  return (
    <Wrapper>
      <Wrapper.Flex>
        <Wrapper.Wrap>Game </Wrapper.Wrap>
        <Wrapper.Wrap style={{ color: '#86b64e' }} className='wizard'>
          Wizard{' '}
        </Wrapper.Wrap>
      </Wrapper.Flex>
    </Wrapper>
  );
};

export default SecondNavbar;
