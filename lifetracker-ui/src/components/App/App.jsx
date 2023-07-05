import "./App.css";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "../Home/Home";
import SignIn from "../SignIn/SignIn";
import Register from "../Register/Register";

export default function App() {
  const [user, setUser] = useState({
    // State hook to manage user data
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
  });

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="auth/signIn" element={<SignIn />} />
          <Route
            path="auth/register"
            element={<Register user={user} setUser={setUser} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
