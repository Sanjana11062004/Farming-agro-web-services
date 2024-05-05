import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [userType, setUserType] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email format");
      return;
    }

    // Basic password validation
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long");
      return;
    }

    // Here you can implement your login logic, like sending a request to your backend
    if (email === "example@example.com" && password === "password") {
      // Successful login
      console.log("Login successful");
      setErrorMessage("");
      // Determine which component to render after login based on user type
      if (userType === "farmer") {
        navigate("/sell"); // Redirect to SellProducts page
      }
      else{
        navigate("/home");
      }
    } else {
      // Failed login
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-field">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="radio-field">
          <label>
            <input
              type="radio"
              value="farmer"
              checked={userType === "farmer"}
              onChange={() => setUserType("farmer")}
            />
            Farmer
          </label>
          <label>
            <input
              type="radio"
              value="retailer"
              checked={userType === "retailer"}
              onChange={() => setUserType("retailer")}
            />
            Retailer
          </label>
        </div>

        <button type="submit">Login</button>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </form>
    </div>
  );
};

export default LoginForm;
