import styled from 'styled-components';

import { ReactComponent as closeList } from '../assets/icons/closeList.svg';
import { ReactComponent as location } from '../assets/icons/location.svg';

const IconCloseList = styled(closeList)`
  width: ${({ width }) => (width ? width : '20px')};
  height: ${({ height }) => (height ? height : '20px')};
  cursor: ${(cursor) => cursor && cursor};
  margin: ${({ margin }) => margin && margin};
  position: ${({ position }) => position && position};
  top: ${({ top }) => top && top};
  transform: ${({ transform }) => transform && transform};
  left: ${({ left }) => left && left};
  right: ${({ right }) => right && right};
  path {
    fill: ${({ color }) => color || '#fff'};
  }
  &:hover {
    path {
      fill: ${({ hoverColor }) => hoverColor && hoverColor};
    }
  }
`;
const IconLocation = styled(location)`
  width: ${({ width }) => (width ? width : '20px')};
  height: ${({ height }) => (height ? height : '20px')};
  cursor: ${(cursor) => cursor && cursor};
  margin: ${({ margin }) => margin && margin};
  position: ${({ position }) => position && position};
  top: ${({ top }) => top && top};
  transform: ${({ transform }) => transform && transform};
  left: ${({ left }) => left && left};
  right: ${({ right }) => right && right};
  path {
    fill: ${({ color }) => color || '#fff'};
  }
  &:hover {
    path {
      fill: ${({ hoverColor }) => hoverColor && hoverColor};
    }
  }
`;
export { IconCloseList, IconLocation };
