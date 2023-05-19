export const initialState = {
  darkMode: true,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'setDarkMode':
      return { ...state, darkMode: action.payload };
    default:
      return state;
  }
};
