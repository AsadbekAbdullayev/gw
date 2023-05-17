import React, { createContext, useContext, useReducer } from 'react';
import { reducer, initialState } from './reducer';

export const StyledContex = createContext();

export const useStyledContex = () => useContext(StyledContex);

export const StyledContexPovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StyledContex.Provider value={[state, dispatch]}>
      {children}
    </StyledContex.Provider>
  );
};
