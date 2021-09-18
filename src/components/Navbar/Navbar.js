import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';
import homeImage from '../../assets/dishy-logo-1.png';
import reviewImage from '../../assets/review-image-1.png';
import searchImage from '../../assets/search-image-1.png';

const Navbar = () => {
  return (
    <>
      <div className="Navbar" id="Navbar">
        <Link to="/">
            <img className="Navbar-image" id="Navbar-home-image" src={homeImage} alt="Home"/>
        </Link>
        <div id="Navbar-right-links-container">
          <Link to="/review">
            <img className="Navbar-image" id="Navbar-review-image" src={reviewImage} alt="Rate a Dish"/>
          </Link>
          
          <Link to="/find">
            <img className="Navbar-image" id="Navbar-search-image" src={searchImage} alt="Find a Dish"/>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;