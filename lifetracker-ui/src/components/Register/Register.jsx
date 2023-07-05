import "./Register.css";
import { useState } from "react";
import axios from "axios";

export default function Register({ user, setUser }) {
  // handles changes in the diff prompts.

  setUser = (event) => {
    if (event.target.name === "firstname") {
      user.firstname = event.target.value;
      console.log(event.target.value);
    }
    if (event.target.name === "lastname") {
      user.lastname = event.target.value;
      console.log(event.target.value);
    }
    if (event.target.name === "email") {
      user.email = event.target.value;
      console.log("emaill initttt" + event.target.value);
    }
    if (event.target.name === "password") {
      user.password = event.target.value;
      console.log(event.target.value);
    }
    if (event.target.name === "username") {
      user.username = event.target.value;
      console.log(event.target.value);
    }

    console.log(user);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // where we send user info to the db
    // send to async function (API)
    // API gets the data
    // then use usermodule psqwl script to

    // Add logic to make the API request to register the user using axios
    axios
      .post("http://localhost:3333/auth/register", user)
      .then((response) => {
        console.log("User registered successfully:", response.data);
        // Handle successful registration
      })
      .catch((error) => {
        console.error("Error registering user:", error);
        // Handle error during registration
      });
  };

  return (
    <>
      <h2>Register</h2>
      <div className="fname-field">
        <label className="label">First Name</label>
        <div className="control ">
          <input
            name="firstname"
            className="checkout-form-input"
            type="text"
            placeholder="First Name..."
            // value={nameInput}
            onChange={setUser}
          />
        </div>
      </div>

      <div className="lname-field">
        <label className="label">Last Name</label>
        <div className="control">
          <input
            name="lastname"
            className="checkout-form-input"
            type="email"
            placeholder="Last Name..."
            // value={emailInput}
            onChange={setUser}
          />
        </div>
      </div>
      <div className="uname-field">
        <label className="label">Username</label>
        <div className="control">
          <input
            name="username"
            className="checkout-form-input"
            type="text"
            placeholder="Username..."
            // value={emailInput}
            onChange={setUser}
          />
        </div>
      </div>

      <div className="pword-field">
        <label className="label">Email</label>
        <div className="control">
          <input
            name="email"
            className="checkout-form-input"
            type="email"
            placeholder="Email..."
            // value={emailInput}
            onChange={setUser}
          />
        </div>
      </div>

      <div className="pword-field">
        <label className="label">Password</label>
        <div className="control">
          <input
            name="password"
            className="checkout-form-input"
            type="password"
            placeholder="Password..."
            // value={emailInput}
            onChange={setUser}
          />
        </div>
      </div>

      <button onClick={handleOnSubmit}>Register</button>
    </>
  );
}
