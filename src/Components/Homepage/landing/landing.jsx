import React from 'react';
import './landing.css'
const LandingPage = () => {
    return (
      <>
    <div className="landing-page">
      <div className="landing-text">
        <h1>LET’S FIND YOU A RIGHT CAREER RIGHT NOW!!!</h1>
      </div>
      <div className="landing-page-form">
        <select name="College" id="college">
          <option value="">Exam, College, Coaching</option>
        </select>
        <select name="Domain" id="domain">
          <option value="">Domain</option>
        </select>
        <select name="Location" id="location">
          <option value="">Location</option>
        </select>
        <button>
          <a href="">Search Now</a>
        </button>
      </div>
    </div>

    <div className="success-stories">
      <h1>200+</h1>
      <p>Success Stories</p>
    </div>

    <hr />

    </>
  );
};

export default LandingPage;
