import "./Register.css";
export const Register = () => {
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
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Confirm Password" className="loginInput" />
            <button className="loginBtn">SignUp</button>
            <button className="loginRegister">Create a New Account</button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
