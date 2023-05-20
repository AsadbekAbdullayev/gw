import styled from 'styled-components';
import myImage from './user.png';
import { Modal, Input, DatePicker } from 'antd';
export const AntModal = styled(Modal)`
  .ant-modal-content {
    /* background-color: ${({ darkmode }) =>
      darkmode && '#39424f !important'}; */
  }
`;

export const AntDatePicker = styled(DatePicker)``;

export const AntInput = styled(Input)``;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  background-color: #1e1e1e;
  justify-content: center;
  margin: 0 0 20px 0;
  position: sticky;
  top: 0px;
  z-index: 99;
`;
Wrapper.Wrap = styled.div`
  width: 1000px;
  height: 50px;
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
Wrapper.Image = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

Wrapper.Flex = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 10px;
`;
Wrapper.Column = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
Wrapper.ImageUser = styled.div`
  width: 35px;
  height: 35px;
  background-color: #fff;
  border-radius: 50%;
  background-image: url(${({ url }) => (url ? url : myImage)});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
Wrapper.Link = styled.div`
  color: #fff;
  font-size: 16px;
  font-weight: 550;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
