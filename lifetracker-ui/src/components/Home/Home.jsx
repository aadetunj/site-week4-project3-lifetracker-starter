import Hero from "../Hero/Hero";
import * as React from "react";
import "./Home.css";

export default function Home({ signedUser }) {
  return (
    <>
      {/* <h1>home init?</h1> */}
      <Hero signedUser={signedUser} />
      {console.log(signedUser)}
    </>
  );
}
