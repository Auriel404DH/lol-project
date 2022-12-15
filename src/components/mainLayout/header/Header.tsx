import React from 'react';
import logo from '../../../assets/logo.png';

const Header = () => {
  return (
    <header className="w-fit px-4 py-3 bg-mainBG2 border-b-2 border-r-2 rounded absolute top-0 left-0 border-mainBorder z-50">
      <div className="w-16 h-16">
        <img src={logo} alt="#" />
      </div>
    </header>
  );
};

export default Header;
