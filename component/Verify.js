
import React, { useState } from 'react';
import './Verify.css'; // Import your custom CSS file

const Verify = () => {
  const [formData, setFormData] = useState({
    email: '',
    OTP: '',
    role: 'reader', // Default role
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your signup logic here (e.g., API call to create a user)
    console.log('otp verified:', formData);
  };

  return (
    <div className="Verify">
      <h2> OTP-Verification</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <label>OTP:</label>
        <input
          type="otp"
          name="otp"
          value={formData.otp}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Verify</button>
      </form>
    </div>
  );
};

export default Verify;