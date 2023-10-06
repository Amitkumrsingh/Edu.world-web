import React from 'react';
import './TopExams.css';

import TopExamseng from '../../../img/material-symbols_engineering-outline.svg'
import TopExamsmedi from '../../../img/icon-park-outline_medical-box.svg'

const TopExams = () => {
  return (
    <div>
      <div className="top-exams-btns">
        <div className="top-exams">
          <h1>TOP EXAMS</h1>
        </div>
        <div className="view-exam">
          <button className="view-exams-button"><a href="">View All Exams</a></button>
        </div>
      </div>

      <div className="top-exams-scrollable-container">
        <div className="top-exams-cards">
          <div className="top-exam-card">
            <div className="exam-domain">
              <img src={TopExamseng} alt="Engineering" />
              <h1>ENGINEERING</h1>
            </div>
            <div className="exam">
              <div className="exam-with-icon">
                <h1>JEE MAIN</h1>
                <i className='fas fa-angle-right'></i>
              </div>
              <div className="exam-with-icon">
                <h1>JEE ADVANCE</h1>
                <i className='fas fa-angle-right'></i>
              </div>
              <div className="exam-with-icon">
                <h1>CET</h1>
                <i className='fas fa-angle-right'></i>
              </div>
              <div className="exam-with-icon">
                <h1>GATE</h1>
                <i className='fas fa-angle-right'></i>
              </div>
            </div>
          </div>

          {/* Repeat the above structure for other exam cards */}
          {/* Example card */}
          <div className="top-exam-card">
            <div className="exam-domain">
              <img src={TopExamsmedi} alt="Medical" />
              <h1>MEDICAL</h1>
            </div>
            <div className="exam">
              <div className="exam-with-icon">
                <h1>NEET</h1>
                <i className='fas fa-angle-right'></i>
              </div>
              <div className="exam-with-icon">
                <h1>NEET PG</h1>
                <i className='fas fa-angle-right'></i>
              </div>
              <div className="exam-with-icon">
                <h1>AIIMS Nursing</h1>
                <i className='fas fa-angle-right'></i>
              </div>
              <div className="exam-with-icon">
                <h1>NEET SS</h1>
                <i className='fas fa-angle-right'></i>
              </div>
            </div>
          </div>
          {/* End of example card */}
          <div className="top-exam-card">
            <div className="exam-domain">
              <img src={TopExamseng} alt="Engineering" />
              <h1>ENGINEERING</h1>
            </div>
            <div className="exam">
              <div className="exam-with-icon">
                <h1>JEE MAIN</h1>
                <i className='fas fa-angle-right'></i>
              </div>
              <div className="exam-with-icon">
                <h1>JEE ADVANCE</h1>
                <i className='fas fa-angle-right'></i>
              </div>
              <div className="exam-with-icon">
                <h1>CET</h1>
                <i className='fas fa-angle-right'></i>
              </div>
              <div className="exam-with-icon">
                <h1>GATE</h1>
                <i className='fas fa-angle-right'></i>
              </div>
            </div>
          </div>

          <div className="top-exam-card">
            <div className="exam-domain">
              <img src={TopExamseng} alt="Engineering" />
              <h1>ENGINEERING</h1>
            </div>
            <div className="exam">
              <div className="exam-with-icon">
                <h1>JEE MAIN</h1>
                <i className='fas fa-angle-right'></i>
              </div>
              <div className="exam-with-icon">
                <h1>JEE ADVANCE</h1>
                <i className='fas fa-angle-right'></i>
              </div>
              <div className="exam-with-icon">
                <h1>CET</h1>
                <i className='fas fa-angle-right'></i>
              </div>
              <div className="exam-with-icon">
                <h1>GATE</h1>
                <i className='fas fa-angle-right'></i>
              </div>
            </div>
          </div>

          <div className="top-exam-card">
                      <div className="exam-domain">
                        <img src={TopExamseng} alt="Engineering" />
                        <h1>ENGINEERING</h1>
                      </div>
                      <div className="exam">
                        <div className="exam-with-icon">
                          <h1>JEE MAIN</h1>
                          <i className='fas fa-angle-right'></i>
                        </div>
                        <div className="exam-with-icon">
                          <h1>JEE ADVANCE</h1>
                          <i className='fas fa-angle-right'></i>
                        </div>
                        <div className="exam-with-icon">
                          <h1>CET</h1>
                          <i className='fas fa-angle-right'></i>
                        </div>
                        <div className="exam-with-icon">
                          <h1>GATE</h1>
                          <i className='fas fa-angle-right'></i>
                        </div>
                      </div>
                    </div>
        </div>
      </div>
    </div>
  );
};

export default TopExams;
