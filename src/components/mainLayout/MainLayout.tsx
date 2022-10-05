import React from 'react';
import Footer from './footer/Footer';
import s from './MainLayout.module.scss';
// import Header from './header/Header';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [seeFotter, setSeeFotter] = React.useState<boolean>(false);

  return (
    <div className={s.main}>
      {/* <Header /> */}
      <div className="flex-1">{children}</div>
      <Footer seeFotter={seeFotter} setSeeFotter={setSeeFotter} />
    </div>
  );
};

export default MainLayout;
