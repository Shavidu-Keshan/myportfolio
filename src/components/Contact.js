import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
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

    // Send email using EmailJS
    emailjs
      .send(
        'service_b6d556c', // Replace with your EmailJS service ID
        'template_ntg03jo', // Replace with your EmailJS template ID
        formData, // Pass form data to the template
        'YOUR_USER_ID' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text);
          alert('Email sent successfully!');
        },
        (error) => {
          console.error('There was an error sending the email:', error);
          alert('Failed to send email. Please try again later.');
        }
      );

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };


  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">
        Contact <span className="underline"></span>
      </h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
        </div>
        <div className="input-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="input-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
          />
        </div>
        <button type="submit" className="submit-button">Send</button>
      </form>
    </section>
  );
};

export default Contact;
