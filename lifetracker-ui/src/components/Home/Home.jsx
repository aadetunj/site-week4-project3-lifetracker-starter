import Hero from "../Hero/Hero";
import * as React from "react";
import "./Home.css";
import athlete from "../../assets/athlete.jpg";

import food from "../../assets/food.jpg";
import rest from "../../assets/alarm.jpg";
import calendar from "../../assets/calendar.jpg";

export default function Home({ appState, setAppState }) {
  return (
    <>
      {/* <h1>home init?</h1> */}
      <Hero appState={appState} />
      <div className="belowHero">
        <div className="photos_card">
          Fitness
          <img className="photos" src={athlete}></img>
        </div>
        <div className="photos_card">
          <>Food</>
          <img className="photos" src={food}></img>
        </div>
        <div className="photos_card">
          Rest
          <img className="photos" src={rest}></img>
        </div>
        <div className="photos_card">
          Planner
          <img className="photos" src={calendar}></img>
        </div>
      </div>
    </>
  );
}
