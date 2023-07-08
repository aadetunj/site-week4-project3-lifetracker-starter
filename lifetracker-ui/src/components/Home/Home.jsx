import Hero from "../Hero/Hero";
import * as React from "react";
import "./Home.css";

export default function Home({ signedUser, appState, setAppState }) {
  return (
    <>
      {/* <h1>home init?</h1> */}
      <Hero signedUser={signedUser} appState={appState} />
      {console.log(signedUser)}
    </>
  );
}
