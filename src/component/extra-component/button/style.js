import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 5px 20px;
  width: fit-content;
  display: flex;
  align-items: center;
  border-radius: 6px;
  height: 28px;
  font-size: 16px;
  font-weight: 600;
  color: ${({ active }) => (active ? '#fff27c' : '#fff')};
  background-color: ${({ darkmode }) => (darkmode ? '#39424f' : '#86b64e')};
  cursor: pointer;
  user-select: none;

  @keyframes pulse {
    0% {
      box-shadow: ${({ Danger }) => (Danger ? '0 0 0' : '0 0 0')};
    }
    70% {
      box-shadow: 0 0 0 5px rgba(204, 169, 44, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
    }
  }
  animation: ${({ activebutton }) => activebutton && 'pulse .7s infinite'};
`;
