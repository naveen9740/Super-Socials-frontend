import { Login } from "./Components/Login/Login";
import { Profile } from "./Components/Profile/Profile";
import { Register } from "./Components/Register/Register";
import { Home } from "./Pages/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";

const App = () => {
  let { user } = useAuth();

  return (
    <div>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route
          path="/profile/:username"
          element={user ? <Profile /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
    </div>
  );
};

export default App;
