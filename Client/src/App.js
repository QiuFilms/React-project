import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";


/*Components imports */
import Login from './Components/Login';
import Register from './Components/Register';
import Header from './Components/Header';
import Profile from './Components/Profile';
import Vanilla from './Components/Vanilla';


function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="home" element={<Header />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="vanilla-features" element={<Vanilla />}></Route>
      </Routes>  
    </BrowserRouter>
  )



}

export default App;
