import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import About from './Pages/About';
import Home from './Pages/HomePage';
import Base from './Comnponents/Base';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Base/>}/>
      <Route path="Signup" element={<Signup/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="logout" element="This is Url base Routing logout"/>
      </Routes>
    </BrowserRouter>

  );
}
export default App;
