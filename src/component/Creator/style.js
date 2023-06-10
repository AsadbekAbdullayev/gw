import styled from 'styled-components';
import { Modal, DatePicker, Input } from 'antd';

export const AntModal = styled(Modal)`
  .ant-modal-content {
    /* background-color: ${({ darkmode }) =>
      darkmode && '#39424f !important'}; */
  }
`;
export const AntDatePicker = styled(DatePicker)``;
export const AntInput = styled(Input)``;

export const Wrapper = styled.div`
  @media (min-width: 1000px) {
    width: 84%;
  }
  @media (min-width: 800px) {
    width: 84%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  height: 100%;
`;
Wrapper.Image = styled.img`
  width: 300px;
  height: 300px;
  border: 1px solid #a4a4a4;
  border-radius: 5px;
`;
Wrapper.Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
Wrapper.Column = styled.div`
  width: 100%;
  flex-direction: column;
  word-wrap: break-word;
  flex-wrap: wrap;
  gap: 10px;
  color: ${({ darkmode }) => (darkmode ? '#fff' : '#000')};
`;
Wrapper.Column1 = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
Wrapper.FlexCard = styled.div`
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
