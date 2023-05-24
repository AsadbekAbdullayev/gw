export const initialState = {
  user: null,
  currentUser: null,
  loadingPage: false,
  userList: [],
  signUseropen: false,
  loginUseropen: false,
  logoutFunction: () => {},
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'setLogoutFunction':
      return { ...state, logoutFunction: action.payload };
    case 'setLoginUseropen':
      return { ...state, loginUseropen: action.payload };
    case 'setSignUseropen':
      return { ...state, signUseropen: action.payload };
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
