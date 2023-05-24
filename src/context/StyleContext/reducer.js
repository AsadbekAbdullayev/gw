export const initialState = {
  darkmode: true,
  width: window?.innerWidth,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'setDarkmode':
      return { ...state, darkmode: action.payload };
    case 'setWidth':
      return { ...state, width: action.payload };
    default:
      return state;
  }
};
