import Hero from "../Hero/Hero";
import * as React from "react";
import "./Home.css";

export default function Home({ appState, setAppState }) {
  return (
    <>
      {/* <h1>home init?</h1> */}
      <Hero appState={appState} />
    </>
  );
}
