import { styled } from 'styled-components';
export const Container = styled.div`
  width: 270px;
  height: 100%;
  background-color: #39424f;
  /* position: absolute; */
  position: absolute;
  left: ${({ open }) => (open ? '0px' : '-270px')};
  transition: 0.3s ease;
`;
