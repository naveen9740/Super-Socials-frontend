import { useRef } from "react";
import { useAuth } from "../../Context/AuthContext";
import "./Login.css";
import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import { Link } from "react-router-dom";

export const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useAuth();

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Super-Social</h3>
          <span className="loginDesc">
            Connect with friends around you on Super-Social
          </span>
        </div>
        <div className="loginRight">
          <form
            className="loginBox"
            onSubmit={(e) => {
              e.preventDefault();
              (async () => {
                dispatch({ type: "login_start" });
                try {
                  const response = await axios.post("auth/login", {
                    email: email.current.value,
                    password: password.current.value,
                  });
                  dispatch({ type: "login_success", payload: response.data });
                } catch (error) {
                  dispatch({ type: "login_failure", payload: error });
                }
              })();
              email.current.value = "";
              password.current.value = "";
            }}
          >
            <input
              type="email"
              placeholder="Email"
              className="loginInput"
              ref={email}
              required
              id="email"
            />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
              ref={password}
              required
              minLength="6"
              id="password"
            />
            <button className="loginBtn" type="submit">
              {isFetching ? (
                <CircularProgress color="primary" size="20px" />
              ) : (
                "Login"
              )}
            </button>
            <span className="loginForgot">Forgot Password</span>
            <button className="loginRegister">
              {isFetching ? (
                <CircularProgress color="primary" size="20px" />
              ) : (
                <Link
                  to="/register"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Create a New Account
                </Link>
              )}
            </button>
          </form>
          <button
            onClick={() => {
              document.getElementById("email").value = "raghu@gmail.com";
              document.getElementById("password").value = "raghu123";
            }}
          >
            Autofill with Test Credentials
          </button>
        </div>
      </div>
    </div>
  );
};
