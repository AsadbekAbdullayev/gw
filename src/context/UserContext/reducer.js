export const initialState = {
  user: null,
  currentUser: null,
  loadingPage: false,
  userList: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'setUser':
      return { ...state, user: action.payload };
    case 'setCurrentUser':
      return { ...state, currentUser: action.payload };
    case 'setUserList':
      return { ...state, userList: action.payload };
    case 'setLoadingPage':
      return { ...state, loadingPage: action.payload };
    default:
      return state;
  }
};
