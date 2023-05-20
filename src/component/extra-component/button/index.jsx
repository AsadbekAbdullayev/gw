import React, { useState } from 'react';
import { Wrapper } from './style';
import { useStyledContex } from '../../../context/useContext';
const GenericButton = ({ onClick, children }) => {
  const [activebutton, setActiveButton] = useState(false);
  const onClick1 = () => {
    onClick && onClick();
    setActiveButton(true);
    setTimeout(() => {
      setActiveButton(false);
    }, 700);
  };
  const [{ darkmode }] = useStyledContex();

  return (
    <Wrapper
      darkmode={darkmode ? 'true' : undefined}
      onClick={onClick1}
      activebutton={activebutton ? 'true' : undefined}
    >
      {children}
    </Wrapper>
  );
};

export default GenericButton;
