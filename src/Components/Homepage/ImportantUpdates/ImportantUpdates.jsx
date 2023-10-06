import React from 'react';
import './ImportantUpdates.css'

const ImportantUpdates = () => {
  return (
    <div className="imp-updates">
      <div className="imp-updates-text">
        <h1>IMPORTANT UPDATES</h1>
      </div>
      <div className="imp-updates-scrollable-container">
        <div className="imp-updates-cards">
          <button>Admission</button>
          <p>Posted Today</p>
          <h3>Anna University Phd Admission Open!</h3>
          <a href="#">View All Details</a>
        </div>

        <div className="imp-updates-cards">
          <button>Exam</button>
          <p>Posted Today</p>
          <h3>MAT CBT Admit Card Out, View to Download</h3>
          <a href="#">View All Details</a>
        </div>

        <div className="imp-updates-cards">
          <button>Admission</button>
          <p>Posted Today</p>
          <h3>Anna University Phd Admission Open!</h3>
          <a href="#">View All Details</a>
        </div>

        <div className="imp-updates-cards">
          <button>Admission</button>
          <p>Posted Today</p>
          <h3>MAT CBT Admit Card Out, View to Download</h3>
          <a href="#">View All Details</a>
        </div>
      </div>
    </div>
  );
};

export default ImportantUpdates;
