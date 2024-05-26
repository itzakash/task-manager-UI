const initialState = {
  isAuthenticated: false,
  token: "",
  name: "",
  email: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        name: action.payload.name,
        email: action.payload.email,
        token: action.payload.token,
      };
    case "LOGOUT":
      return {
        isAuthenticated: false,
        token: "",
        name: "",
        email: "",
      };
    default:
      return state;
  }
};

export default authReducer;
