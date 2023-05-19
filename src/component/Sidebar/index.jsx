import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './style';
import { sidebarData } from '../../utils/sidebar';
import { useStyledContex } from '../../context/useContext';

const Sidebar = () => {
  const [{ darkMode }] = useStyledContex();
  const navigate = useNavigate();
  const [current, seCurrnet] = useState('');
  const Navigation = (path) => {
    navigate(path);
    seCurrnet(path);
  };
  return (
    <Container>
      {sidebarData?.map(
        ({ name, id, path, hidden }) =>
          !hidden && (
            <Container.Menu
              key={id}
              onClick={() => Navigation(path)}
              active={path === current ? 'true' : undefined}
              darkMode={darkMode === true ? 'true' : undefined}
            >
              {name}
            </Container.Menu>
          )
      )}
    </Container>
  );
};

export default Sidebar;
