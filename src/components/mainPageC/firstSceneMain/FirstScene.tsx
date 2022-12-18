import React from 'react';
import { test, tornado, logoStart } from '../../../assets/startWindow';
import { useNavigate } from 'react-router-dom';
import { HasagePlay, HasageRun, Poro, Poro2 } from '../../../assets/characters';
import s from './firstScene.module.scss';

const FirstScene = () => {
  const navigate = useNavigate();
  const navigateToTest = () => navigate('/test');
  const navigateToRead = () => navigate('/story');

  React.useEffect(() => {
    setTimeout(() => {
      const startAlert = document.querySelector('#startAlert');
      const readAlert = document.querySelector('#readAlert');
      startAlert?.classList.add(s.opacity1);
      readAlert?.classList.add(s.opacity1);
    }, 10000);
  }, []);

  return (
    <div className={s.wrapper}>
      <img className={s.hasage} src={HasageRun} alt="qwe" />
      <img className={s.hasagePlay} src={HasagePlay} alt="qwe" />
      <img className={s.tornado} src={tornado} alt="qwe" />

      <div className="flex justify-center w-4/6 relative mx-auto flex-col">
        <img className={s.logoStart} src={logoStart} alt="lol" />
        <img className={s.logoTest} src={test} alt="lol" />
      </div>

      <div className={s.alertButtons}>
        <div id="startAlert" onClick={navigateToTest} className={`${s.buttonTest} ${s.btnTest}`}>
          Click here to start test!
        </div>
        <div id="readAlert" onClick={navigateToRead} className={`${s.buttonTest} ${s.btnStory}`}>
          Click here to read a story!
        </div>
        <div className={s.poroImg}>
          <img src={Poro} className={s.poroMove} alt="" />
          <img src={Poro2} className={s.poroStatic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FirstScene;
