import React from 'react';
import { Li, Ul } from './style';
import { useStyledContex } from '../../../context/useContext';

const Loading = () => {
  const [{ darkmode }] = useStyledContex();

  return (
    <Ul>
      <Li darkmode={darkmode === true ? 'true' : undefined} />
      <Li darkmode={darkmode === true ? 'true' : undefined} />
      <Li darkmode={darkmode === true ? 'true' : undefined} />
      <Li darkmode={darkmode === true ? 'true' : undefined} />
    </Ul>
  );
};

export default Loading;
