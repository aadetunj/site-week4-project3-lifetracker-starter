import "./Hero.css";
import React from "react";
import watch from "../../assets/tracker.jpg";
export default function Hero({appState }) {
  return (
    <div className="hero">
      <div className="content">
        <div className="intro">
          {appState ? (
            <h1 className="h1">Hey, {localStorage.getItem("firstName")}!</h1>
          ) : (
            <h1 className="h1">Hey There!</h1>
          )}

          {appState ? (
            <p id="hero-paragraph">Welcome back! Are you ready to jump in?</p>
          ) : (
            <p id="hero-paragraph">
              LifeTracker will help you take back conch of your Life!
            </p>
          )}
        </div>
        <div >
        <img className="hero-img" src={watch}></img>
        </div>
      </div>
    </div>
  );
}
