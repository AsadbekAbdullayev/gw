import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  background-color: #8bc34a;
  justify-content: center;
`;
Wrapper.Wrap = styled.div`
  width: 1000px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
