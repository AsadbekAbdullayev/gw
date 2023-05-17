import React from 'react';
import { Wrapper } from './style';
import { useStyledContex } from '../../context/useContext';

const FirstNavbar = () => {
  const [{ darkMode }, dispatch] = useStyledContex();
  return (
    <Wrapper>
      <Wrapper.Wrap>
        FirstNavbar
        <Wrapper.Image
          onClick={() => dispatch({ type: 'setDarkMode', payload: !darkMode })}
          src={
            !darkMode
              ? 'https://itorrents-igruha.org/templates/gamestorgreen/images/sunny.png'
              : 'https://itorrents-igruha.org/templates/gamestorgreen/images/moon.png'
          }
        />
      </Wrapper.Wrap>
    </Wrapper>
  );
};

export default FirstNavbar;
