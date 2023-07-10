import "./App.css";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "../Home/Home";
import SignIn from "../SignIn/SignIn";
import Register from "../Register/Register";
import SleepPage from "../SleepPage/SleepPage";
import ExercisePage from "../ExercisePage/ExercisePage";
import NutritionPage from "../NutritionPage/NutritionPage";
import ActivityPage from "../ActivityPage/ActivityPage";
import axios from "axios";


export default function App() {
  const [appState, setAppState] = useState(false);
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    emailaddress: "",
    username: "",
    password: "",
  });
  const [decodedToken, setDecodedToken] = useState();
  console.log("updated", appState);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token: ", token);

    if (!decodedToken) {
      axios
        .post("http://localhost:3007/auth/decodedtoken", {
          token: token,
        })
        .then((response) => {
          console.log("Decoded token retrieved successfully:", response.data);
          console.log("Decoded token value:", response.data.decodedToken);
          setDecodedToken(response.data.decodedToken?.exp);
        })
        .catch((error) => {
          console.error("Error retrieving decoded token:", error);
        });
    }
  }, [decodedToken]);

  useEffect(() => {
    console.log("decodedToken:", decodedToken);
    if (decodedToken) {
      setAppState(true); // Setting navbar to true (sign out)
      const currentTime = Math.floor(Date.now() / 1000); // Getting the current time in seconds
      if (decodedToken < currentTime) {
        localStorage.removeItem("token"); // Removing the token from local storage
        // Redirecting to the homepage
      }
    }
  }, [decodedToken, setAppState]);

  return (
    <div>
      <BrowserRouter>
        <Navbar appState={appState} setAppState={setAppState} />
        <Routes>
          <Route
            path="auth/signIn"
            element={
              <SignIn
                appState={appState}
                setAppState={setAppState}
              />
            }
          />
          <Route
            path="auth/register"
            element={
              <Register
                user={user}
                setUser={setUser}
                appState={appState}
                setSApptate={setAppState}
              />
            }
          />
          <Route
            path="/"
            element={
              <Home
                appState={appState}
                setAppState={setAppState}
              />
            }
          />
          <Route path="/Sleep" element={<SleepPage appState={appState} />} />
          <Route
            path="/Exercise"
            element={<ExercisePage appState={appState} />}
          />
          <Route
            path="/Nutrition"
            element={<NutritionPage appState={appState} />}
          />
          <Route
            path="/Activity"
            element={<ActivityPage appState={appState} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
