import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ color }) => (color ? '#313843' : '#fff')};
`;
Container.Flex = styled.div`
  display: flex;
  gap: 10px;
  width: 1000px;
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
