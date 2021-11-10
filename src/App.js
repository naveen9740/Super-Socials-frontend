import { Login } from "./Components/Login/Login";
import { Profile } from "./Components/Profile/Profile";
import { Register } from "./Components/Register/Register";
import { Home } from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
