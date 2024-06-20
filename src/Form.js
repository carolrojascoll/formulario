// CAROLINA ROJAS COLLANTE
import React, { useState } from 'react';
import './Form.css'; 

function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Validate fields
    switch (name) {
      case 'firstName':
      case 'lastName':
        setErrors({
          ...errors,
          [name]: value.length < 2 ? `${name.replace(/^\w/, c => c.toUpperCase())} must be at least 2 characters` : ''
        });
        break;
      case 'email':
        setErrors({
          ...errors,
          email: value.length < 5 ? 'Email must be at least 5 characters' : ''
        });
        break;
      case 'password':
        setErrors({
          ...errors,
          password: value.length < 8 ? 'Password must be at least 8 characters' : '',
          confirmPassword: value !== formData.confirmPassword ? 'Passwords must match' : errors.confirmPassword
        });
        break;
      case 'confirmPassword':
        setErrors({
          ...errors,
          confirmPassword: value !== formData.password ? 'Passwords must match' : ''
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <form>
          <div className="form-group">
            <label>First Name</label>
            <input 
              type="text" 
              name="firstName" 
              value={formData.firstName} 
              onChange={handleChange} 
              className="form-input"
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input 
              type="text" 
              name="lastName" 
              value={formData.lastName} 
              onChange={handleChange} 
              className="form-input"
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="form-input"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              className="form-input"
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input 
              type="password" 
              name="confirmPassword" 
              value={formData.confirmPassword} 
              onChange={handleChange} 
              className="form-input"
            />
            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
          </div>
        </form>

        <div className="form-data">
          <h3>Your Form Data</h3>
          <p>First Name: {formData.firstName}</p>
          <p>Last Name: {formData.lastName}</p>
          <p>Email: {formData.email}</p>
          <p>Password: {formData.password}</p>
          <p>Confirm Password: {formData.confirmPassword}</p>
        </div>
      </div>
    </div>
  );
}

export default Form;
