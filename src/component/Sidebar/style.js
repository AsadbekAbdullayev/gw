import { styled } from 'styled-components';
export const Container = styled.div`
  width: 270px;
  min-height: 800px;
  margin-left: auto;
  background-color: #39424f;
  overflow: hidden;
  @media (max-width: 800px) {
    width: 0px;
  }
`;
