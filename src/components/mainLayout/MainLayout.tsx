import React from 'react';
import Footer from './footer/Footer';
// import Header from './header/Header';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="font-ubuntuMedium min-h-screen flex flex-col bg-mainBG text-main">
      {/* <Header /> */}
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
