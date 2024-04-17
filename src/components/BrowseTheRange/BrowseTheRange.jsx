import React from 'react';
import styles from './BrowseTheRange.css'; 
import img1 from '../../img/img1.png';
import img2 from '../../img/img2.png';
import img3 from '../../img/img3.png';

function BrowseTheRange () {
    return (
        <section id="section_container">
          <div className="section_title"><h3><b>Browse The Range</b></h3></div>
          <div className="section_subtitle"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
      
          <div className="container_sections_img">
              <div className="section_row">
                  <div className="column_sec">
                  <img src={img1} className="img1" alt="img1" />
                      <p className="img_title">Dining</p>
                  </div>
                  <div className="column_sec">
                      <img src={img2}  className="img2" alt="img2" />
                      <p className="img_title">Living</p>
                  </div>
                  <div className="column_sec">
                      <img src={img3}  className="img3" alt="img3" />
                      <p className="img_title">Bedroom</p>
                  </div>
              </div>
          </div>
        </section>
    );
}

export default BrowseTheRange;
