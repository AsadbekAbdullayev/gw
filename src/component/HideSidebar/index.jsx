import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStyledContex, useUserContex } from '../../context/useContext';
import { sidebarData } from '../../utils/sidebar';
import { Modal } from 'antd';

import { Container } from './style';
const HideSidebar = ({ open, setOpen }) => {
  const [data, dispatchUser] = useUserContex();
  const { confirm } = Modal;

  const [{ darkmode }] = useStyledContex();
  const navigate = useNavigate();
  const [current, seCurrnet] = useState('');
  const Navigation = (path) => {
    navigate(path);
    seCurrnet(path);
  };
  const showConfirm = () => {
    confirm({
      title: 'Do you want to logout?',
      onOk() {
        data?.logoutFunction();
        navigate('/home');

        dispatchUser({ type: 'setCurrentUser', payload: {} });
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
  return (
    <Container open={open ? 'true' : undefined}>
      <Container.Close onClick={() => setOpen(!open)}>+</Container.Close>
      <Container.ImageUser url={data?.currentUser?.avatar} />
      <Container.Column style={{ gap: '0px' }}>
        {!data?.currentUser?.nickName ? (
          <>
            <Container.Link
              onClick={() =>
                dispatchUser({ type: 'setLoginUseropen', payload: true })
              }
            >
              SignUp
            </Container.Link>
            <Container.Link
              onClick={() =>
                dispatchUser({ type: 'setSignUseropen', payload: true })
              }
            >
              SignIn
            </Container.Link>
          </>
        ) : (
          <>
            <Container.Link>{data?.currentUser?.nickName}</Container.Link>
            <Container.Link onClick={() => showConfirm()}>
              Logout
            </Container.Link>
          </>
        )}
      </Container.Column>
      {sidebarData?.map(
        ({ name, id, path, hidden }) =>
          !hidden && (
            <Container.Menu
              key={id}
              onClick={() => {
                Navigation(path);
                setOpen(false);
              }}
              active={path === current ? 'true' : undefined}
              darkmode={darkmode === true ? 'true' : undefined}
            >
              {name}
            </Container.Menu>
          )
      )}
    </Container>
  );
};

export default HideSidebar;
