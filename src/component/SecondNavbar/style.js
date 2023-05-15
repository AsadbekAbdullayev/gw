import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 0 20px 0;
`;
Wrapper.Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 1000px;
  height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  .wizard {
    :hover {
      color: red;
    }
  }
`;
Wrapper.Wrap = styled.div`
  width: fit-content;
  height: 50px;
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
  font-family: helvetica;
  font-size: 50px;
  color: #1e1e1e;
`;
