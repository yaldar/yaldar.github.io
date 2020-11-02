import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <div className="contact-links">
        <a href="mailto:yaldar.hapak@gmail.com" className="contact-link">
          Email
        </a>
        <a href="https://github,.com/yaldar/" className="contact-link">
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/yaldar-hapak/"
          className="contact-link"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Contact;
