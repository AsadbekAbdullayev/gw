import styled from 'styled-components';

export const Container = styled.div`
  width: 820px;
  height: 100%;
  @media (max-width: 1000px) {
    width: 600px;
  }
`;
Container.Flex = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    justify-content: center;
  }
`;
export const Card = styled.div`
  width: 190px;
  height: 230px;
  background-color: lightblue;
  @media (max-width: 800px) {
    width: 220px;
  }
`;
