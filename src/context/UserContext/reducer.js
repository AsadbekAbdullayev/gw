export const initialState = {
  user: null,
  currentUser: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'setUser':
      return { ...state, user: action.payload };
    case 'setCurrentUser':
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};
