import React from 'react';
import './navbar.css';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell} from '@fortawesome/fontawesome-free-solid'
import feApp from '../../../img/fe_app-menu.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h1>edu. world</h1>
      </div>

      <hr className="logo-sep" />

      <ul className="navbar-categories">
        <li>
          <img src={feApp} alt="" />
        </li>
        <li>Browse Categories</li>
      </ul>

      <input
        type="text"
        className="navbar-search"
        placeholder="🔍 Search for colleges, courses, exams and more..."
          />



      <button className="navbar-get-counsellor">Get a Counsellor</button>

      <div className="navbar-icons">
        <a href="#" className="icon-link">
            <FontAwesomeIcon icon={faBell} />
        </a>
        <a href="#" className="navbar-login">
          Log In
        </a>
      </div>
    </div>
  );
};

export default Navbar;
