import { createContext, useContext, useReducer } from "react";

let getUser = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: getUser ? getUser : null,
  isFetching: false,
  error: false,
};
export const AuthContext = createContext(initialState);
export const AuthContextProvider = ({ children }) => {
  const AuthReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN_START":
        return {
          user: null,
          isFetching: true,
          error: false,
        };
      case "LOGIN_SUCCESS":
        localStorage.setItem("user", JSON.stringify(action.payload));
        return { user: action.payload, isFetching: false, error: false };
      case "LOGIN_FAILURE":
        return { user: null, isFetching: false, error: action.payload };
      case "FOLLOW":
        return {
          ...state,
          user: {
            ...state.user,
            user: {
              ...state.user.user,
              following: [...state.user.user.following, action.payload],
            },
          },
        };
      case "UNFOLLOW":
        return {
          ...state,
          user: {
            ...state.user,
            user: {
              ...state.user.user,
              following: state.user.user.following.filter(
                (following) => following !== action.payload
              ),
            },
          },
        };
      default:
        break;
    }
  };
  const [value, dispatch] = useReducer(AuthReducer, initialState);
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
