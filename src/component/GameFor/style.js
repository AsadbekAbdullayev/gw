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
  background-color: ${({ darkmode }) => (darkmode ? '#39424f' : '#86b64e')};
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border-radius: 4px;
  overflow: hidden;
  &:hover {
    .cardImage {
      transform: scale(110%);
    }
  }
  @media (max-width: 800px) {
    width: 220px;
  }
`;
Card.Image = styled.div`
  border-radius: 4px 4px 0 0;
  width: 100%;
  height: 200px;
  background-image: url('https://firebasestorage.googleapis.com/v0/b/test-storage-4464e.appspot.com/o/cargo-prime-file%20(2)%20(1).jpeg?alt=media&token=15357d0e-a29c-4d28-adcb-77dd3a375237');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.7s;
  z-index: 1;
`;
Card.Content = styled.div`
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  background-color: inherit;
  width: 100%;
  padding: 10px;
  font-weight: 550;
  font-size: 16px;
  word-wrap: break-word;
  box-sizing: border-box;
  color: ${({ darkmode }) => (darkmode ? '#9db6ac' : '#fff')};
  text-align: center;
`;
