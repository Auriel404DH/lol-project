import React from 'react';
import Footer from './footer/Footer';
import s from './MainLayout.module.scss';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={s.main}>
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
