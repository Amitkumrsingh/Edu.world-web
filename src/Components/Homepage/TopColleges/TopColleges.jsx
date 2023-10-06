import React from 'react';
import './TopColleges.css'
import iitlogo from '../../../img/Rectangle 155.png';

const TopColleges = () => {
  return (
    <div className="top-colleges">
      <div className="top-colleges-sort">
        <div className="top-colleges-text">
          <h1>TOP 10 COLLEGES</h1>
        </div>
        <div className="top-colleges-select">
          <select name="Domain" id="domain">
            <option value="">Domain</option>
          </select>
          <select name="Location" id="location">
            <option value="">Location</option>
          </select>
        </div>
      </div>

      <div className="top-colleges-cards">
        {[...Array(10)].map((_, index) => (
          <div className="small-cards" key={index}>
            <div className="card-number">
              <h1>{index + 1}</h1>
            </div>
            <hr className="card-sep" />
            <div className="iit-img">
              <img src={iitlogo} alt="" />
            </div>

            <div className="iit-name">
              <h2>Indian Institute of Technology, Bombay</h2>
            </div>
            <hr className="card-sep" />
            <div className="entrance">
              <h2>Entrances</h2>
              <p>JEE Mains, JEE Advanced, CEED, GATE</p>
            </div>
            <hr className="card-sep" />
            <div className="deadline">
              <h2>Application Deadline</h2>
              <p>15 Jan - 21 Aug 2023</p>
            </div>
            <hr className="card-sep" />
            <div className="prev-cutoff">
              <h2>Previous Cutoff</h2>
              <p>JEE Advanced Cut off 144</p>
            </div>
            <hr className="card-sep" />
            <div className="apply">
              <button className="apply-now">
                <a href="#">Apply Now</a>
              </button>
              <button className="download-brochure">
                <a href="">Download Brochure</a>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all-colleges">
        <button className="view-college-btn">
          <a href="">View All Colleges</a>
        </button>
      </div>
    </div>
  );
};

export default TopColleges;
