import React, { useEffect } from 'react';
import roomImage1 from '../../img/roomImage1.png';
import roomImage2 from '../../img/roomImage2.png';
import roomImage3 from '../../img/roomImage3.png';
import roomImage4 from '../../img/roomImage4.png';
import './RoomDesigns.css';

function RoomDesigns() {
  useEffect(() => {
    const images = [
      roomImage1,
      roomImage2,
      roomImage3,
      roomImage4
    ];

    const names = [
      '01 — Bed Room',
      '02 — Dining Room',
      '03 — Study Room',
      '04 — Living Room'
    ];

    const titles = [
      'Inner Peace',
      'Minimalism',
      'Rustic Charm',
      'Urban Chic'
    ];

    let currentIndex = 0;

    function showCurrentImage() {
      const imgElement = document.getElementById('roomImage');
      const nameElement = document.getElementById('roomName');
      const titleElement = document.getElementById('roomTitle');
      const dots = document.querySelectorAll('.dot');

      if (imgElement && nameElement && titleElement && dots.length) {
        imgElement.src = images[currentIndex];
        nameElement.textContent = names[currentIndex];
        titleElement.textContent = titles[currentIndex];
        dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === currentIndex);
        });
      }

      const thumbnails = document.getElementById('thumbnails');
      const nextIndex = (currentIndex + 1) % images.length;
      thumbnails.innerHTML = `<img class="thumbnail" src="${images[nextIndex]}" alt="Thumbnail ${nextIndex}" onclick="setCurrentIndex(${nextIndex})" style="width: 344.95px; height: 486; margin-right: 10px;">`;
    }

    window.setCurrentIndex = function(index) {
      currentIndex = index;
      showCurrentImage();
    }

    function handleClick() {
      currentIndex = (currentIndex + 1) % images.length;
      showCurrentImage();
    }
  
    document.getElementById('nextButton').addEventListener('click', handleClick);
  
    // Cleanup function
    return () => {
      const nextButton = document.getElementById('nextButton');
      if (nextButton) {
        nextButton.removeEventListener('click', handleClick);
      }
    };
  }, []);

  return (
    <section id="room_designs">
      <div className="bordered_text2">
        <h3>50+ Beautiful rooms <br /> inspiration</h3>
        <p>Our designers have already created numerous beautiful room prototypes to inspire you.</p>
        <div className="explore_more">
          <button><a href="shop.html">Explore More</a></button>
        </div>
      </div>

      <div className="room-preview">
        <img id="roomImage" src={roomImage1} alt="Room Image" />
        <div id="thumbnails"></div>
        <div className="room-info">
          <p id="roomName">01 — Bed Room</p>
          <h2 id="roomTitle">Inner Peace</h2>
        </div>
        <button id="nextButton" className="arrow-button">&rarr;</button>
        <div className="pagination">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>
  );
}

export default RoomDesigns;