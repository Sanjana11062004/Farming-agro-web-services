import React, { useState } from "react";
import { Link } from "react-router-dom";

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div className="checkbox">
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} />
        {label}
      </label>
    </div>
  );
};

const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFarmer, setIsFarmer] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    // Validate email
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    // Validate password
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleRegister = () => {
    if (validateForm()) {
      fetch("http://localhost:5002/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, isFarmer }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          if (data && data.message) {
            console.log("Registration successful:", data.message);
            // Handle success message here, if needed
          } else {
            throw new Error("Unexpected server response");
          }
        })
        .catch((error) => {
          console.error("Error registering user:", error);
          // Handle error here, if needed
        });
    }
  };

  return (
    <div className="login-container">
      {" "}
      {/* Reuse login-container class */}
      <div className="login-form">
        {" "}
        {/* Reuse login-form class */}
        <h2>Register</h2>
        <div className="input-field">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="input-field">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <Checkbox
          label="Are you a farmer?"
          checked={isFarmer}
          onChange={(e) => setIsFarmer(e.target.checked)}
        />
        <button className="button" onClick={handleRegister}>
          Register
        </button>{" "}
        {/* Reuse button class */}
        <Link to="/login">
          <p className="register-link">Login</p>
        </Link>{" "}
        {/* Reuse register-link class */}
      </div>
    </div>
  );
};

export default RegistrationForm;
