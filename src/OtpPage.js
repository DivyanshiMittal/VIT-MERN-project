import React, { useState } from 'react';
import './OtpPage.css';

const OtpPage = () => {
  const [otp, setOtp] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Handle OTP registration logic here
    console.log('OTP:', otp);
  };

  return (
    <div className="otp-container">
      <form className="otp-form" onSubmit={handleRegister}>
        <h2>Enter OTP</h2>
        <div className="form-group">
          <label htmlFor="otp">OTP:</label>
          <input
            type="text"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
};

export default OtpPage;
