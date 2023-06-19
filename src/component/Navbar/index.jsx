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
  const [state, setState] = useState('');
  const [{ darkmode, width }] = useStyledContex();
  useEffect(() => setWidthSize(width), [width]);
  const navigate = useNavigate();
  const onChange = (e) => {
    if (e.target.value) {
      setState(e.target.value);
    } else {
      setState('');
      navigate('/');
    }
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      navigate(`/search/:${state}`);
    }
  };
  const onClickSearch = () => {
    console.log('hey');
  };

  return (
    <Wrapper darkmode={darkmode ? 'true' : undefined}>
      <Wrapper.Wrap>
        <Wrapper.Flex style={{ width: '100%' }}>
          <GenericInput
            onChange={(e) => onChange(e)}
            onKeyDown={(e) => onKeyDown(e)}
            onClickSearch={onClickSearch}
          />

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
