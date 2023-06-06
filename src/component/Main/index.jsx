import React, { useEffect } from 'react';
import { Container } from './style';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import FirstNavbar from '../FirstNavbar';
import SecondNavbar from '../SecondNavbar';
import { useStyledContex, useUserContex } from '../../context/useContext';

const Main1 = () => {
  const [{ loadingPage }] = useUserContex();
  const [{ darkmode }, dispatch] = useStyledContex();

  // async function getAllDataUser() {
  //   dispatchUser({ type: 'setLoadingPage', payload: true });
  //   const q = query(collection(db, 'users'));
  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.forEach((doc) => {
  //     list.push(doc.data());
  //   });
  //   dispatchUser({ type: 'setUserList', payload: [...list] });
  //   dispatchUser({ type: 'setLoadingPage', payload: false });
  // }

  // useEffect(() => {
  //   if (!userList?.length) {
  //     getAllDataUser();
  //     return () => {};
  //   }
  // }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      dispatch({ type: 'setWidth', payload: window.innerWidth });
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });
  return (
    <Container color={darkmode ? 'true' : undefined}>
      {loadingPage ? (
        <h3>Loading data ..</h3>
      ) : (
        <Container color={darkmode ? 'true' : undefined}>
          <FirstNavbar />
          <SecondNavbar />
          <Navbar />
          <Container.Flex>
            <Outlet />
            <Sidebar />
          </Container.Flex>
        </Container>
      )}
    </Container>
  );
};

export default Main1;
