import React from 'react';
import { Container } from './style';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import FirstNavbar from '../FirstNavbar';
import SecondNavbar from '../SecondNavbar';
import { useStyledContex } from '../../context/useContext';
const Main1 = () => {
  const [{ darkMode }] = useStyledContex();
  return (
    <Container color={darkMode ? 'true' : undefined}>
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
