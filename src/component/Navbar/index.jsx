import React, { useState } from 'react';
import { Wrapper } from './style';
import { useGetwidth } from '../../hooks';
import HideSidebar from '../HideSidebar';
import { IconCloseList } from '../../styledIcons';
const Navbar = () => {
  const { width } = useGetwidth();
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <Wrapper.Wrap>
        Navbar
        {width < 800 && (
          <IconCloseList
            onClick={() => setOpen(!open)}
            onFocus={() => console.log('hey')}
          />
        )}
        {width < 800 && <HideSidebar open={open} />}
      </Wrapper.Wrap>
    </Wrapper>
  );
};

export default Navbar;
