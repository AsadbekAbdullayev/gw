import React from 'react';
import { Container } from './style';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import FirstNavbar from '../FirstNavbar';
import SecondNavbar from '../SecondNavbar';
const Main1 = () => {
  return (
    <Container>
      <FirstNavbar />
      <SecondNavbar />
      <Navbar />
      <Container.Flex>
        <Outlet />
        <Sidebar />
      </Container.Flex>
    </Container>
  );
};

export default Main1;
