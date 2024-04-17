import React from 'react';
import styles from './NewArrival.css'; 

function NewArrival () {
    return (
        <section id="home_section">
          <div className="buy_now_texts_button">
            <div className="bordered_text">
              <h3><b>New Arrival</b></h3>
              <h1 style={{ margin: '-5px' }}> Discover Our <br /> New Collection</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Quod, magni aliquam? Ducimus nemo ipsam perferendis a excepturi.</p>
              <button><a href="checkout.html"> BUY NOW </a></button>
            </div>
          </div>
        </section>
    );
}


export default NewArrival;
