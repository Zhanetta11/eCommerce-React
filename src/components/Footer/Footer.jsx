import React from 'react';
import './Footer.css';

function Footer () {
  return (
    <section id="footer1">
      <footer>
        <div className="main-content">
          <div className="column">
            <h1>Ala-Too IT Club</h1>
            <h4>Done by University students</h4>
          </div>
          <div className="column">
            <p>Links</p>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="shop.html">Shop</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="contact.html">Contacts</a></li>
            </ul>
          </div>
          <div className="column">
            <p>Help</p>
            <ul>
              <li><a href="#">Payment Options</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Privacy Policies</a></li>
            </ul>
          </div>
        </div>
        <hr className="line" />
        <div className="text-bottom">
          <p>All rights reserved by Ala-Too IT Club</p>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
