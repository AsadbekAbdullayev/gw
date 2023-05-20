import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  background-color: #8bc34a;
  justify-content: center;
  margin: 20px 0;
  background-color: ${({ darkmode }) => (darkmode ? '#39424f' : '#86b64e')};
`;
Wrapper.Wrap = styled.div`
  width: 1000px;
  height: 45px;
  display: flex;
  gap: 5px;
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
Wrapper.Flex = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 5px;
  color: #fff;
  font-size: 16px;
`;
