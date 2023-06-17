import styled from 'styled-components';

export const Container = styled.div`
  @media (min-width: 1000px) {
    width: 84%;
  }
  @media (min-width: 800px) {
    width: 84%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }

  color: ${({ darkmode }) => (darkmode ? '#fff' : '#000')};
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
Container.Title = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: ${({ darkmode }) => (darkmode ? '#fff' : '#000')};
`;
Container.Media = styled.div`
  width: 100%;
`;

Container.Line = styled.div`
  width: 100%;
  height: 1px;
  border: 1px dashed ${({ darkmode }) => (darkmode ? '#2874ba' : '#86b64e')};
`;
Container.Wrapper = styled`
width: 100%;
border:1px solid red;
`;
Container.Desc = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ darkmode }) => (darkmode ? '#fff' : '#000')};
  cursor: pointer;
  &:hover {
    text-decoration: dashed;
    text-decoration: underline;
    text-decoration-color: ${({ darkmode }) => (darkmode ? '#fff' : '#000')};
  }
`;

Container.Link = styled.a`
  font-size: 16px;
  font-weight: 500;
  color: ${({ darkmode }) => (darkmode ? '#fff' : '#000')};
  cursor: pointer;
  text-decoration: dashed;
  text-decoration: underline;
  text-decoration-color: ${({ darkmode }) => (darkmode ? '#fff' : '#000')};
`;
Container.Meta = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #6dc849;
  color: #6dc849;
  box-sizing: border-box;
  font-weight: 700;
  text-align: center;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 165px;
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
  /* background-image: url('https://firebasestorage.googleapis.com/v0/b/test-storage-4464e.appspot.com/o/cargo-prime-file%20(2)%20(1).jpeg?alt=media&token=15357d0e-a29c-4d28-adcb-77dd3a375237'); */
  background-image: ${({ url }) => url && `url(${url})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.7s;
  z-index: 1;
`;
Card.Content = styled.div`
  z-index: 2;
  height: 40px;
  display: flex;
  flex-wrap: wrap;
  background-color: inherit;
  width: 100%;
`;

Card.Title = styled.div`
  width: calc(100%);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${({ darkmode }) => (darkmode ? '#9db6ac' : '#fff')};
  padding: 10px;
  font-weight: 550;
  font-size: 16px;
  word-wrap: break-word;
  box-sizing: border-box;
  text-align: center;
  background-color: inherit;
`;
