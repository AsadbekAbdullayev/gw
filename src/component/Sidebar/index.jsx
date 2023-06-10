import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './style';
import { sidebarData } from '../../utils/sidebar';
import { useStyledContex } from '../../context/useContext';

const Sidebar = () => {
  const [{ darkmode }] = useStyledContex();
  const navigate = useNavigate();
  const Navigation = (path) => {
    navigate(path);
  };
  return (
    <Container>
      {sidebarData?.map(
        ({ name, id, path, hidden }) =>
          !hidden && (
            <Container.Menu
              key={id}
              onClick={() => Navigation(path)}
              active={path === window?.location?.pathname ? 'true' : undefined}
              darkmode={darkmode === true ? 'true' : undefined}
            >
              {name}
            </Container.Menu>
          )
      )}
    </Container>
  );
};

export default Sidebar;
