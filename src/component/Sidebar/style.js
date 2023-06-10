import { styled } from 'styled-components';
export const Container = styled.div`
  width: 160px;
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
  width: 142px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  padding: 5px;
  color: ${({ active }) => (active ? '#EED944' : '#fff')};

  background-color: ${({ darkmode }) => (darkmode ? '#39424f' : '#86b64e')};
  cursor: pointer;
`;
