import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import { useAuth } from "../../Context/AuthContext";
import { useRef } from "react";
import axios from "axios";

export const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const navigate = useNavigate();

  const { isFetching } = useAuth();

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
            onSubmit={async (e) => {
              e.preventDefault();
              if (password.current.value !== confirmPassword.current.value) {
                password.current.setCustomValidity("Password dont match");
              } else {
                const user = {
                  username: username.current.value,
                  email: email.current.value,
                  password: password.current.value,
                };
                try {
                  const response = await axios.post("/auth/register", user);
                  console.log({ response });
                  navigate("/login");
                } catch (error) {
                  console.log(error.message);
                }
              }
            }}
          >
            <input
              type="text"
              placeholder="Username"
              className="loginInput"
              ref={username}
              id="username"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="loginInput"
              ref={email}
              id="email"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
              ref={password}
              id="password"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="loginInput"
              ref={confirmPassword}
              id="confirmPassword"
              required
            />
            <button className="loginBtn" type="submit">
              SignUp
            </button>
            <button className="loginRegister">
              {isFetching ? (
                <CircularProgress color="primary" size="20px" />
              ) : (
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Login
                </Link>
              )}
            </button>
          </form>
          <button
            style={{ cursor: "pointer" }}
            onClick={() => {
              document.getElementById("username").value = "raghu";
              document.getElementById("email").value = "raghu@gmail.com";
              document.getElementById("password").value = "raghu123";
              document.getElementById("confirmPassword").value = "raghu123";
            }}
          >
            Autofill with Test credentials
          </button>
        </div>
      </div>
    </div>
  );
};
