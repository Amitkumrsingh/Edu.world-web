import React from 'react';
import './WishToStudy.css'
const WishToStudy = () => {
  return (
    <div className="wish-to-study">
      <div className="wish-to-study-text">
        <h1>WISH TO STUDY FROM YOUR FAVOURITE LOCATION?</h1>
        <p>
          Choose from the one selected by <strong>1000+ users</strong>
        </p>
      </div>
      <div className="wish-to-study-btns">
        <div className="wish-to-study-btn">
          <button><a href="">Hyderabad</a></button>
          <button><a href="">Pune</a></button>
          <button><a href="">Hyderabad</a></button>
        </div>
        <div className="wish-to-study-btn">
          <button><a href="">Hyderabad</a></button>
          <button><a href="">Pune</a></button>
          <button><a href="">Hyderabad</a></button>
        </div>
        <div className="wish-to-study-btn">
          <button><a href="">Hyderabad</a></button>
          <button><a href="">Pune</a></button>
          <button><a href="">Hyderabad</a></button>
        </div>
      </div>
    </div>
  );
};

export default WishToStudy;
