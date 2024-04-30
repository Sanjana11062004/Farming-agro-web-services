import React, { useState } from 'react';
import LoginForm from './LoginForm';


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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFarmer, setIsFarmer] = useState(false);

  const handleRegister = () => {
    // Implement registration logic here
    console.log('Registration Details:', { email, password, isFarmer });
  };

  return (
    <div className="registration-form">
      <h2>Register</h2>
      <div className="input-field">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-field">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Checkbox
        label="Are you a farmer?"
        checked={isFarmer}
        onChange={(e) => setIsFarmer(e.target.checked)}
      />
      <button onClick={handleRegister}>Register</button>
      <LoginForm></LoginForm>
    </div>
    
  );
};



export default RegistrationForm;
