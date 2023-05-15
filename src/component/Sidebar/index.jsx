import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './style';
import { sidebarData } from '../../utils/sidebar';
const Sidebar = () => {
  const navigate = useNavigate();
  const [current, seCurrnet] = useState('');
  const Navigation = (path) => {
    navigate(path);
    seCurrnet(path);
  };
  return (
    <Container>
      {sidebarData?.map(({ name, id, path }) => {
        return (
          <Container.Menu
            key={id}
            onClick={() => Navigation(path)}
            active={path === current}
          >
            {name}
          </Container.Menu>
        );
      })}
    </Container>
  );
};

export default Sidebar;
