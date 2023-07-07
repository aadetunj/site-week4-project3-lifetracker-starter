import * as React from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";

export default function Navbar({ appState, setAppState }) {

  const handleSignOut = async (e) => {
    e.preventDefault();
    setAppState(false)
  }

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="site-title">
          ayo's very own...
        </Link>
        <ul>
          <li>
            <Link to="/Activity">Activity</Link>
          </li>
          <li>
            <Link to="/Exercise">Exercise</Link>
          </li>
          <li>
            <Link to="/Nutrition">Nutrition</Link>
          </li>
          <li>
            <Link to="/Sleep">Sleep</Link>
          </li>
          {appState ? (
            <>
              <li>
                <Link to="/auth/signIn">
                  <button className="signButton" onClick={handleSignOut}>
                    Sign Out
                  </button>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/auth/signIn">
                  <button className="signButton">Sign In</button>
                </Link>
              </li>
              <li>
                <Link to="/auth/register">
                  <button className="regButton">Register</button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}
