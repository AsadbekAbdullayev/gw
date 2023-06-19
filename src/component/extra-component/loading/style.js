import styled from 'styled-components';

export const Ul = styled.ul`
  height: 200px;
  width: 100%;
  display: block;
  margin: 0 auto;
`;
export const Li = styled.li`
  position: absolute;
  left: 50%;
  top: 370px;
  display: block;
  background: transparent;
  border: 10px solid
    ${({ darkmode }) => (darkmode ? 'rgba(23, 246, 251, 1)' : '#86b64e')};

  border-left-color: transparent;
  border-right-color: transparent;
  border-radius: 500px;
  transition: all 0.5s ease;
  &:last-child {
    position: absolute;
    left: 50%;
    top: 370px;
    z-index: 20;
    width: 200px;
    height: 100px;
    margin-left: -110px;
    margin-top: -110px;
    padding: 70px 0px 30px;
    background-color: rgba(8, 8, 8, 1);
    border: 10px solid rgba(8, 8, 8, 1);
    border-radius: 200px;
    text-shadow: 2px 2px 0px rgba(0, 0, 0, 1);
    box-shadow: 0px 0px 30px rgba(23, 246, 251, 0.5);
    animation: pulseShadow 0.8s infinite linear;
  }

  &:last-child:after {
    content: '';
    border: 3px dotted rgba(22, 42, 43, 1);
    border-radius: 200px;
    width: 200px;
    height: 200px;
    display: block;
    position: absolute;
    top: -3px;
    left: -3px;
    background-color: transparent;
    box-shadow: inset 0px 0px 30px rgba(0, 0, 0, 1);
  }
  &:first-child {
    margin-left: -122px;
    margin-top: -122px;
    z-index: 2;
    width: 240px;
    height: 240px;
    border-width: 10px;
    animation: spinBG 1s infinite linear;
  }

  &:nth-child(2) {
    margin-left: -137px;
    margin-top: -137px;
    z-index: 1;
    width: 270px;
    height: 270px;
    border-width: 2px;
    border-style: dotted;
    box-shadow: 0px 0px 20px rgba(23, 246, 251, 0.5);
    animation: spinBG2 2s infinite linear;
  }

  &:nth-child(3) {
    margin-left: -150px;
    margin-top: -150px;
    z-index: 1;
    width: 296px;
    height: 296px;
    border-width: 2px;
    box-shadow: inset 0px 0px 25px rgba(23, 246, 251, 0.25);
    animation: spinBG 12s infinite linear;
  }

  &:nth-child(4) {
    display: none;
    /* z-index: 1;
    border-width: 5px;
    border-style: solid;
    box-shadow: inset 0px 0px 25px rgba(23, 246, 251, 1);
    animation: spinBG3 8s infinite linear; */
  }

  @keyframes pulseGlow {
    0% {
      text-shadow: 0px 0px 20px rgba(23, 246, 251, 0.75);
    }
    50% {
      text-shadow: 0px 0px 40px rgba(23, 246, 251, 0.5);
    }
    100% {
      text-shadow: 0px 0px 20px rgba(23, 246, 251, 0.75);
    }
  }

  @keyframes pulseShadow {
    0% {
      box-shadow: 0px 0px 30px rgba(23, 246, 251, 0.25);
    }
    50% {
      box-shadow: 0px 0px 30px rgba(23, 246, 251, 0.75);
    }
    100% {
      box-shadow: 0px 0px 30px rgba(23, 246, 251, 0.25);
    }
  }

  @keyframes spinBG {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spinBG2 {
    0% {
      transform: rotate(360deg);
      box-shadow: 0px 0px 1px rgba(23, 246, 251, 0.5);
    }
    50% {
      transform: rotate(180deg);
      box-shadow: 0px 0px 20px rgba(23, 246, 251, 0.5);
    }
    100% {
      transform: rotate(0deg);
      box-shadow: 0px 0px 1px rgba(23, 246, 251, 0.5);
    }
  }

  @keyframes spinBG3 {
    0% {
      transform: rotate(180deg);
      box-shadow: 0px 0px 1px rgba(23, 246, 251, 0.1);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-180deg);
    }
  }
`;
