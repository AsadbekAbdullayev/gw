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
  width: fit-content;
  display: flex;
  gap: 10px;
  font-size: 20px;
  font-weight: 500;
  color: ${({ darkmode }) => (darkmode ? '#fff' : '#a4a4a4')};
`;
Wrapper.Column = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
Wrapper.Column1 = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
