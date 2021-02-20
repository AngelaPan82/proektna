import React from 'react';
import logo from '../logo192.png'; // Tell webpack this JS file uses this image

const Logo = () => {
  // Import result is the URL of your image
  return (
    <div className="apanLogo">
      <img src={logo} alt="Logo" />
    </div>
  )
}

export default Logo;
