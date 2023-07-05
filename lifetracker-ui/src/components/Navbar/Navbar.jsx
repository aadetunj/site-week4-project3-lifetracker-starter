import * as React from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <a href="/" className="site-title">
          ayo's very own...
        </a>
        <ul>
          <li>
            <a href="/">Activity</a>
          </li>
          <li>
            <a href="#About">Exercise</a>
          </li>
          <li>
            <a href="#Contact">Nutrition</a>
          </li>
          <li>
            <a href="#product-list">Sleep</a>
          </li>
          <li>
            <Link to="auth/signIn">
              <button className="signButton">Sign In</button>
            </Link>
          </li>
          <li>
            <Link to="/auth/register">
              <button className="regButton">Register</button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
