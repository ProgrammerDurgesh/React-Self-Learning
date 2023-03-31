import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Home from "./Pages/HomePage";
import Base from "./Comnponents/Base";
import CardsTesting from "./Cards/Testing-cards";
import DashBoard from "./DashBoard/DeshBoard-Details";
import MiniDrawer from "./DashBoard/DeshBoard-Details";
import PersistentDrawerLeft from "./DashBoard/DeshBoard-Details";
import ResponsiveDrawer from "./DashBoard/DeshBoard-Details";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ResponsiveDrawer />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="logout" element="This is Url base Routing logout" />
        <Route path="card" element={<CardsTesting />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
