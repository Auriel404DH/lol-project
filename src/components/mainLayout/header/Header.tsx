import React from 'react';
import logo from '../../../assets/logo.png';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 py-3 border-b-2 border-mainBorder">
      <div className="w-16 h-16">
        <img src={logo} alt="#" />
      </div>
      <div className="text-main text-xl flex">
        <div className="px-4">Test</div>
        <div className="px-4">Game</div>
        <div className="px-4">Profile</div>
      </div>
    </header>
  );
};

export default Header;
