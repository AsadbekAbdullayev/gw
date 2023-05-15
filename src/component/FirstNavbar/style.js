import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  background-color: #1e1e1e;
  justify-content: center;
  margin: 0 0 20px 0;
  position: sticky;
  top: 0px;
`;
Wrapper.Wrap = styled.div`
  width: 1000px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #868686;
  @media (max-width: 1000px) {
    width: 800px;
  }
  @media (max-width: 800px) {
    width: 500px;
  }
  @media (max-width: 500px) {
    width: 300px;
  }
`;
