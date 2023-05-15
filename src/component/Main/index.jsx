import React from 'react';
import { Container } from './style';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
const Main1 = () => {
  return (
    <Container>
      <Navbar />
      <Container.Flex>
        <Outlet />
        <Sidebar />
      </Container.Flex>
    </Container>
  );
};

export default Main1;
