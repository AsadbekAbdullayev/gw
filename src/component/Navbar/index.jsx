import React, { useEffect, useState } from 'react';
import { Wrapper } from './style';
import { useGetwidth } from '../../hooks';
import HideSidebar from '../HideSidebar';
import { IconCloseList } from '../styledIcons';
import { useStyledContex } from '../../context/useContext';
import { GenericInput } from '../extra-component';
const Navbar = () => {
  const { width } = useGetwidth();
  const [open, setOpen] = useState(false);
  const [widthSize, setWidthSize] = useState(width);
  const [{ darkmode }] = useStyledContex();
  useEffect(() => setWidthSize(width), [width]);
  // const [item, setItem] = useState();
  // console.log(item, 'ww');
  // useEffect(() => {
  // fetch('https://api.ipify.org/?format=json')
  // .then((res) => res.json())
  // .then((data) => console.log(data, 'data'));

  //     latitude:41.3385653
  //  longitude: 69.2058815
  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     console.log(position, 'postionm');
  //   });
  // }

  //   fetch(
  //     'http://maps.googleapis.com/maps/api/geocode/json?latlng=41.3385653,69.2058815&sensor=false&key='
  //   ).then((data) => console.log(data, 'data'));
  // }, []);

  return (
    <Wrapper darkmode={darkmode ? 'true' : undefined}>
      <Wrapper.Wrap>
        <Wrapper.Flex style={{ width: '100%' }}>
          <GenericInput />
        </Wrapper.Flex>
        {widthSize < 800 && (
          <IconCloseList
            onClick={() => setOpen(!open)}
            onFocus={() => console.log('hey')}
          />
        )}
        {widthSize < 800 && <HideSidebar open={open} />}
      </Wrapper.Wrap>
    </Wrapper>
  );
};

export default Navbar;
