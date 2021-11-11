import { createContext, useContext, useReducer } from "react";
// import AuthReducer from "./AuthReducer";

const initialState = {
  user: null,
  isFetching: false,
  error: false,
  // number: 0,
};
export const AuthContext = createContext(initialState);
export const AuthContextProvider = ({ children }) => {
  const AuthReducer = (state, action) => {
    switch (action.type) {
      case "login_start":
        return {
          user: null,
          isFetching: true,
          error: false,
        };
      case "login_success":
        return { user: action.payload, isFetching: false, error: false };
      case "login_failure":
        return { user: null, isFetching: false, error: action.payload };
      default:
        break;
    }
  };
  const [value, dispatch] = useReducer(AuthReducer, initialState);
  console.log({ value });
  return (
    <AuthContext.Provider
      value={{
        user: value.user,
        isFetching: value.isFetching,
        error: value.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
