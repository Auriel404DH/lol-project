import React from 'react';
import FirstScene from '../../components/mainPageC/firstSceneMain/FirstScene';
import { useAppDispatch } from '../../hooks/hooks';

import s from './MainPage.module.scss';

const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const bg = document.querySelector('#bg');
    bg?.classList.add(s.opacity1);
  }, [dispatch]);

  return (
    <div id="bg" className={s.main}>
      <FirstScene />
    </div>
  );
};

export default MainPage;
