import React from 'react';
import './StudyAbroad.css'
import StudyAbroadimg from '../../../img/image 17.png'
const StudyAbroad = () => {
  return (
    <div className="study-abroad">
      <div className="wish-to-card">
        <h1>WISH TO STUDY ABROAD?</h1>
        <select name="Domain" id="domain">
          <option value="">Domain</option>
        </select>
        <select name="Location" id="location">
          <option value="">Location</option>
        </select>
      </div>

      <div className="study-abroad-scrollable-container">
        <div className="study-abroad-cards">
          {/* Repeat the following structure for each study abroad card */}
          <div className="study-abroad-card">
            <div className="study-abroad-img">
              <img src={StudyAbroadimg} alt="" />
              <h1>USA</h1>
              <p>Avg. Study Cost - <strong> 33.43 K USD/ Year </strong></p>
            </div>
            <p>Know about exams</p>
            <p>Why Study in USA?</p>
            <p>Post Study Opportunities </p>
            <button><a href="#">Check Colleges</a></button>
          </div>
          {/* End of study abroad card repetition */}
 <div className="study-abroad-card">
            <div className="study-abroad-img">
              <img src={StudyAbroadimg} alt="" />
              <h1>USA</h1>
              <p>Avg. Study Cost - <strong> 33.43 K USD/ Year </strong></p>
            </div>
            <p>Know about exams</p>
            <p>Why Study in USA?</p>
            <p>Post Study Opportunities </p>
            <button><a href="#">Check Colleges</a></button>
          </div>

           <div className="study-abroad-card">
            <div className="study-abroad-img">
              <img src={StudyAbroadimg} alt="" />
              <h1>USA</h1>
              <p>Avg. Study Cost - <strong> 33.43 K USD/ Year </strong></p>
            </div>
            <p>Know about exams</p>
            <p>Why Study in USA?</p>
            <p>Post Study Opportunities </p>
            <button><a href="#">Check Colleges</a></button>
          </div>

           <div className="study-abroad-card">
            <div className="study-abroad-img">
              <img src={StudyAbroadimg} alt="" />
              <h1>USA</h1>
              <p>Avg. Study Cost - <strong> 33.43 K USD/ Year </strong></p>
            </div>
            <p>Know about exams</p>
            <p>Why Study in USA?</p>
            <p>Post Study Opportunities </p>
            <button><a href="#">Check Colleges</a></button>
          </div>
          {/* Repeat the above structure for other study abroad cards */}
        </div>
      </div>
    </div>
  );
};

export default StudyAbroad;
