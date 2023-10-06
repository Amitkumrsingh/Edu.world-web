import React from 'react';
import './DreamCollege.css'
const DreamColleges = () => {
  return (
    <div className="dream-colleges">
      <div className="dream-colleges-text">
        <h1>YOUR DREAM COLLEGES</h1>
        <button>View All</button>
      </div>
      <div className="scrollable-container">
        <div className="dream-college-card">
          <p>Most viewed</p>
          <h2>Top colleges in Mumbai</h2>
        </div>
        <div className="dream-college-card">
          <p>Most viewed</p>
          <h2>Top colleges in Mumbai</h2>
        </div>
        <div className="dream-college-card">
          <p>Most viewed</p>
          <h2>Top colleges in Mumbai</h2>
        </div>
        <div className="dream-college-card">
          <p>Most viewed</p>
          <h2>Top colleges in Mumbai</h2>
        </div>
      </div>
    </div>
  );
};

export default DreamColleges;
