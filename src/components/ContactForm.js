// ContactForm.js
import React, { useState } from 'react';
import './ContactForm.css';
import contactUsGif from '../../src/email-gif.gif'; 


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:mbsalarzon@gmail.com?subject=${encodeURIComponent('Contact Form Submission')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`)}`;

    window.location.href = mailtoLink;
  };

return (
    <div className="contact-form">
      <h2>📧 Contact Us
      <img className="contact-us-gif" src={contactUsGif} alt="Contact Us GIF" style={{ width: '50%', height: 'auto' }} />
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="form-title">Name:</div>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-input" required />
        </div>

        <div className="form-group">
          <div className="form-title">Email:</div>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input" required />
        </div>

        <div className="form-group">
          <div className="form-title">Message:</div>
          <textarea
            id="message"
            name="message"
            rows="10" 
            value={formData.message}
            onChange={handleChange}
            className="form-input"
            required
          ></textarea>
        </div>

        <button type="submit" className="form-button">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
