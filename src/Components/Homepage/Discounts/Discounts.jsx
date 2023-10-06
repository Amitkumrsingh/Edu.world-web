import React from 'react';
import './Discounts.css'

import Discountimg from '../../../img/image 11.png';

const Discounts = () => {
  return (
    <div className="discounts">
      <div className="discounts-text">
        <h1>UNLOCK DISCOUNTS ON BEST COACHING</h1>
        <button className="view-discount"><a href="#">View All</a></button>
      </div>
      <div className="discounts-scrollable-container">
        <div className="discounts-cards">
          {/* Repeat the following structure for each discount card */}
          <div className="discount-card">
            <div className="Coaching-btn">
              <h2>CAT Coaching (MBA)</h2>
            </div>
            <img src={Discountimg} alt="#" />
            <p>Mumbai, Bangalore, Hyderabad + 5 more</p>
            <button className="download-details"><a href="#">Download Details</a></button>
            <button className="enroll-now"><a href="#">Enroll Now</a></button>
          </div>
          {/* End of discount card repetition */}
           <div className="discount-card">
            <div className="Coaching-btn">
              <h2>CAT Coaching (MBA)</h2>
            </div>
            <img src={Discountimg} alt="#" />
            <p>Mumbai, Bangalore, Hyderabad + 5 more</p>
            <button className="download-details"><a href="#">Download Details</a></button>
            <button className="enroll-now"><a href="#">Enroll Now</a></button>
          </div>

           <div className="discount-card">
            <div className="Coaching-btn">
              <h2>CAT Coaching (MBA)</h2>
            </div>
            <img src={Discountimg} alt="#" />
            <p>Mumbai, Bangalore, Hyderabad + 5 more</p>
            <button className="download-details"><a href="#">Download Details</a></button>
            <button className="enroll-now"><a href="#">Enroll Now</a></button>
          </div>

           <div className="discount-card">
            <div className="Coaching-btn">
              <h2>CAT Coaching (MBA)</h2>
            </div>
            <img src={Discountimg} alt="" />
            <p>Mumbai, Bangalore, Hyderabad + 5 more</p>
            <button className="download-details"><a href="#">Download Details</a></button>
            <button className="enroll-now"><a href="#">Enroll Now</a></button>
          </div>

           <div className="discount-card">
            <div className="Coaching-btn">
              <h2>CAT Coaching (MBA)</h2>
            </div>
            <img src={Discountimg} alt="" />
            <p>Mumbai, Bangalore, Hyderabad + 5 more</p>
            <button className="download-details"><a href="#">Download Details</a></button>
            <button className="enroll-now"><a href="#">Enroll Now</a></button>
          </div>
          {/* Repeat the above structure for other discount cards */}
        </div>
      </div>
    </div>
  );
};

export default Discounts;
