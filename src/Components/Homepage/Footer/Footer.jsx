import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="first-block">
        <h1>edu. world</h1>
        <p>Address and contact details</p>
      </div>

      <div className="second-block">
        <ul>
          <li>Top 10 Exam</li>
          <li>Top 10 Colleges for Engineering</li>
          <li>Top 10 Colleges for Medical</li>
          <li>Want to Study Abroad?</li>
          <li>Coaching for Engineering in Hyderabad</li>
        </ul>
      </div>

      <div className="fourth-block">
        <h1>CONFUSED ABOUT YOUR CAREER? </h1>
        <button><a href="">GET A COUNSELLOR NOW!</a></button>
      </div>
    </div>
  );
};

export default Footer;
