import React from 'react';
import { Wrapper } from './style';
import Atropos from 'atropos/react';
import { useNavigate } from 'react-router-dom';

const SecondNavbar = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Wrapper.Flex onClick={() => navigate('/')}>
        <Atropos className='my-atropos' shadowScale={0} duration={70}>
          <Wrapper.Wrap>
            <Wrapper.Title>Game </Wrapper.Title>
            <Wrapper.Title style={{ color: '#2874ba' }} className='wizard'>
              Wizard{' '}
            </Wrapper.Title>
          </Wrapper.Wrap>
        </Atropos>
      </Wrapper.Flex>
    </Wrapper>
  );
};

export default SecondNavbar;
