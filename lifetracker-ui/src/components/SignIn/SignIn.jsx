import "./SignIn.css";
import { useState } from "react";
import axios from "axios";

export default function SignIn() {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  console.log(form);

  const handleUserInput = (event) => {
    console.log(event.target.value);
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }));
      } else {
        setErrors((e) => ({ ...e, email: null }));
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setErrors((e) => ({ ...e, form: null }));

    try {
      const res = await axios.post("http://localhost:3005/auth/login", form);
      if (res?.data) {
        console.log(res);
        console.log("Sign in Successful!, Good job Ayo")
      } else {
        setErrors((e) => ({
          ...e,
          form: "Invalid username/password combination",
        }));
      }
    } catch (err) {
      console.log(err);
      const message = err?.response?.data?.error?.message;
      setErrors((e) => ({
        ...e,
        form: message ? String(message) : String(err),
      }));
    }
  };

  return (
    <>
      <h2>Sign In</h2>
      <form>
      <div className="email-field">
        <label className="label">Email</label>
        <div className="control">
          <input
            name="email"
            className="checkout-form-input"
            type="text"
            placeholder="Student Name..."
            value={form.email}
            onChange={handleUserInput}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
      </div>

      <div className="password-field">
        <label className="label">Password</label>
        <div className="control">
          <input
            name="password"
            className="checkout-form-input"
            type="email"
            placeholder="student@codepath.org"
            value={form.password}
            onChange={handleUserInput}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
      </div>
      <button onClick={handleOnSubmit}>Sign In</button>
      </form>
    </>
  );
}
