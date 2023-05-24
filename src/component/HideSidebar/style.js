import { styled } from 'styled-components';
import myImage from '../../assets/img/user.png';

export const Container = styled.div`
  width: 270px;
  /* height: 400px; */
  background-color: #39424f;
  position: absolute;
  left: ${({ open }) => (open ? '0px' : '-270px')};
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-left: auto;
  /* background-color: #39424f; */
  z-index: 100;
`;

Container.Menu = styled.div`
  padding: 5px 20px;
  width: 200px;
  display: flex;
  align-items: center;
  border-radius: 6px;
  height: 28px;
  font-size: 16px;
  font-weight: 600;
  color: ${({ active }) => (active ? '#fff27c' : '#fff')};
  background-color: ${({ darkmode }) => (darkmode ? '#39424f' : '#86b64e')};
  border: ${({ darkmode }) => darkmode && '2px solid #a4a4a4'};
  transition: 0.3s all;
  cursor: pointer;
  &:hover {
    border-color: yellowgreen;
  }
`;
Container.Close = styled.div`
  color: yellowgreen;
  font-size: 20px;
  font-weight: 500;
  position: absolute;
  transform: rotate(45deg);
  border: 2px solid yellowgreen;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;
Container.ImageUser = styled.div`
  width: 45px;
  height: 45px;
  background-color: #fff;
  border-radius: 50%;
  background-image: url(${({ url }) => (url ? url : myImage)});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 50px 0 0 0;
`;
Container.Link = styled.div`
  color: #fff;
  font-size: 16px;
  font-weight: 550;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
Container.Column = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Wrapper = styled.div``;
