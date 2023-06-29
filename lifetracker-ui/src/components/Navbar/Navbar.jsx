import * as React from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <a href="/" className="site-title">
          <b>A-A-A?</b>
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
            <a href="#Contact">Sign In</a>
          </li>
          <li>
            <a href="#Contact">Register</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
