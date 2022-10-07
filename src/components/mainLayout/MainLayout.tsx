import React from 'react';
import Footer from './footer/Footer';
import s from './MainLayout.module.scss';
// import Header from './header/Header';
//
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={s.main}>
      {/* <Header /> */}
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
