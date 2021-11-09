import "./Login.css";
export const Login = () => {
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
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginBtn">Login</button>
            <span className="loginForgot">Forgot Password</span>
            <button className="loginRegister">Create a New Account</button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
