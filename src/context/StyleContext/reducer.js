export const initialState = {
  darkmode: true,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'setDarkmode':
      return { ...state, darkmode: action.payload };
    default:
      return state;
  }
};
