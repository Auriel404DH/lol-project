import React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';

interface IMainLayout {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayout) => {
  return (
    <div className="font-ubuntuMedium min-h-screen flex flex-col bg-mainBG">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
