import React, { useState } from 'react';
import { Wrapper } from './style';
import { IconSearch } from '../../styledIcons';
const GenericInput = ({ onChange, value }) => {
  const [blur, setBlur] = useState(false);
  const onFocus = () => {
    setBlur(true);
  };
  const onBlur = () => {
    setBlur(false);
  };
  return (
    <Wrapper blur={blur ? 'true' : undefined}>
      <Wrapper.Input
        onChange={onChange}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder='Search..'
      />
      {blur && (
        <IconSearch margin={'0 10px 0 0'} style={{ cursor: 'pointer' }} />
      )}
    </Wrapper>
  );
};

export default GenericInput;
