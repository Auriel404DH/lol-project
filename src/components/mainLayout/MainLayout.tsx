import React from 'react';
import BgVideo from '../mainPageC/bgVideo/BgVideo';
import Header from './header/Header';
import s from './MainLayout.module.scss';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={s.main}>
      <Header />
      <div className="flex-1">{children}</div>
      <BgVideo />
    </div>
  );
};

export default MainLayout;
