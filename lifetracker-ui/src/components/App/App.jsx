import "./App.css";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import SignIn from "../SignIn/SignIn";
import Register from "../Register/Register";

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="register" element={<Register />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}