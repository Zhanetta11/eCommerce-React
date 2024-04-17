import React from 'react';
import styles from './FuniroFurniture.css'; 
import image1 from '../../img/image1.png';
import image2 from '../../img/image2.png';
import image3 from '../../img/image3.png';
import image4 from '../../img/image4.png';
import image5 from '../../img/image5.png';
import image6 from '../../img/image6.png';
import image7 from '../../img/image7.png';
import image8 from '../../img/image8.png';
import image9 from '../../img/image9.png';

function FuniroFurniture () {
    return (
        <section id="funiroFurniture">
          <div className="share">
            <p>Share your setup with</p>
            <h3>#FuniroFurniture</h3>
          </div>
          <div className="images"> 
            <div className="layout2"> 
              <div className="imgs1"> 
                <img src={image1} alt="img" width="258" height="285" />
                <img src={image2} alt="img" width="255" height="285" />
                <img src={image3} alt="img" width="248" height="285" />
                <img src={image4} alt="img" width="235" height="226" />
              </div>
              <div className="imgs2">
                <img src={image5} alt="img" width="385" height="264" />
                <img src={image6} alt="img" width="345" height="264" />
                <img src={image7} alt="img" width="344" height="242" />
              </div>
              <div className="imgs3">
                <img src={image8} alt="img" width="178" height="242" />
                <img src={image9} alt="img" width="258" height="196" />
              </div>
            </div>
          </div>
        </section>
    );
}

export default FuniroFurniture;
