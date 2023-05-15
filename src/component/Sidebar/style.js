import { styled } from 'styled-components';
export const Container = styled.div`
  width: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  min-height: 800px;
  margin-left: auto;
  /* background-color: #39424f; */
  overflow: hidden;
  @media (max-width: 800px) {
    width: 0px;
  }
`;
Container.Menu = styled.div`
  padding: 5px 10px;
  width: 220px;
  display: flex;
  align-items: center;
  border-radius: 6px;
  height: 28px;
  font-size: 16px;
  font-size: 16px;
  color: ${({ active }) => (active ? '#fff27c' : '#fff')};
  background-color: #86b64e;
  cursor: pointer;
`;
