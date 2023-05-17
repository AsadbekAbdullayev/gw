export const initialState = {
  darkMode: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'setDarkMode':
      return { ...state, darkMode: action.payload };
    default:
      return state;
  }
};
