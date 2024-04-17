import React from 'react';
import styles from './Header.css'; 

function Header () {
  return (
    <header>
      <div className='header-details'>
        <div className='header-logo'>A</div>
        <ul id="navbar">
          <li><a className="active" href="index.html">Home</a></li>
          <li><a href="shop.html">Shop</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <ul id="navbar-icon">
          <li><a href="profile.html"><i className="fas fa-user-plus"></i> </a> </li>
          <li><a href="search-icon.html"><i className="fas fa-search"></i> </a> </li>
          <li><a href="heart-icon.html"><i className="fas fa-heart"></i> </a> </li>
          <li><a href="#" id="cartBtn"><i className="fas fa-shopping-cart"></i></a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
