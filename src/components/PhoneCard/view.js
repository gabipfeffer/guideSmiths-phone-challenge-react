import React from 'react';

import './style.scss';

function PhoneCard() {
  return (
    <div className="PhoneCard">
      <h2>iPhone 7</h2>
      <img
        src="https://switch.com.my/wp-content/uploads/2017/11/iPhone7-Black-2Up-34L-US-EN-SCREEN.jpg"
        alt="iPhone 7"
      />
      <h5>by APPLE</h5>
      <div className="PhoneCard__desc">
        <h4>Description:</h4>
        <p>
          iPhone 7 dramatically improves the most important aspects of the
          iPhone experience. It introduces advanced new camera systems. The best
          performance and battery life ever in an iPhone. Immersive stereo
          speakers. The brightest, most colorful iPhone display. Splash and
          water resistance*. And it looks every bit as powerful as it is. This
          is iPhone 7.
        </p>
      </div>
      <div className="PhoneCard__addInfo">
        <p>
          <b>Screen:</b> 4,7 inch IPS
        </p>
        <p>
          <b>Processor:</b> A10 Fusion
        </p>
        <p>
          <b>RAM:</b> 2
        </p>
      </div>
    </div>
  );
}

export default PhoneCard;

// {
//     "id": 0,
//     "name": "iPhone 7",
//     "manufacturer": "Apple",
//     "description": "iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.",
//     "color": "black",
//     "price": 769,
//     "imageFileName": "IPhone_7.png",
//     "screen": "4,7 inch IPS",
//     "processor": "A10 Fusion",
//     "ram": 2
// },
