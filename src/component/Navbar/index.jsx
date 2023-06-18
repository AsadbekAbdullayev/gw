import React, { useEffect, useState } from 'react';
import { Wrapper } from './style';
import HideSidebar from '../HideSidebar';
import { IconCloseList } from '../styledIcons';
import { useStyledContex } from '../../context/useContext';
import { useNavigate } from 'react-router-dom';

import { GenericInput } from '../extra-component';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [widthSize, setWidthSize] = useState('');
  const [{ darkmode, width }] = useStyledContex();
  useEffect(() => setWidthSize(width), [width]);
  const navigate = useNavigate();
  const onChange = (e) => {
    if (e.target.value) {
      navigate(`/search/:${e.target.value}`);
    } else {
      navigate('/');
    }
  };
  return (
    <Wrapper darkmode={darkmode ? 'true' : undefined}>
      <Wrapper.Wrap>
        <Wrapper.Flex style={{ width: '100%' }}>
          <GenericInput onChange={(e) => onChange(e)} />

          {widthSize < 800 ? (
            <IconCloseList
              onClick={() => setOpen(!open)}
              // onFocus={() => console.log('hey')}
            />
          ) : null}
          {widthSize < 800 ? (
            <HideSidebar open={open ? 'true' : undefined} setOpen={setOpen} />
          ) : null}
        </Wrapper.Flex>
      </Wrapper.Wrap>
    </Wrapper>
  );
};

export default Navbar;
