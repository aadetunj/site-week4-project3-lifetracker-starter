import "./App.css";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "../Home/Home";
import SignIn from "../SignIn/SignIn";
import Register from "../Register/Register";
import SleepPage from "../SleepPage/SleepPage";
import ExercisePage from "../ExercisePage/ExercisePage";
import NutritionPage from "../NutritionPage/NutritionPage";
import ActivityPage from "../ActivityPage/ActivityPage";

export default function App() {
  const [appState, setAppState] = useState(false);
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    emailaddress: "",
    username: "",
    password: "",
  });
  const [signedUser, setSignedUser] = useState({});

  console.log("updated", appState);
  return (
    <div>
      <BrowserRouter>
        <Navbar appState={appState} setAppState={setAppState} />
        <Routes>
          <Route
            path="auth/signIn"
            element={
              <SignIn
                signedUser={signedUser}
                setSignedUser={setSignedUser}
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
                signedUser={signedUser}
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
