import "./SignIn.css";

export default function SignIn() {
  return (
    <>
      <h2>Sign In</h2>
      <div className="email-field">
        <label className="label">Email</label>
        <div className="control">
          <input
            name="name"
            className="checkout-form-input"
            type="text"
            placeholder="Student Name..."
            // value={nameInput}
            // onChange={handleNameInputChange}
          />
        </div>
      </div>

      <div className="pword-field">
        <label className="label">Password</label>
        <div className="control">
          <input
            name="email"
            className="checkout-form-input"
            type="email"
            placeholder="student@codepath.org"
            // value={emailInput}
            // onChange={handleEmailInputChange}
          />
        </div>
      </div>
      <button>Sign In</button>
    </>
  );
}
