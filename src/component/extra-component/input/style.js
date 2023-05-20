import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 2px solid #fff;
  width: ${({ blur }) => (blur ? '100%' : '320px')};
  height: 30px;
  display: flex;
  align-items: center;
  background-color: inherit;
  border-radius: 4px;
  justify-content: space-between;
  transition: 0.3s ease;
`;

Wrapper.Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: inherit;
  outline: none;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 15px;
  padding: 0 10px;
  font-family: helvetica;
  ::placeholder {
  }
`;
