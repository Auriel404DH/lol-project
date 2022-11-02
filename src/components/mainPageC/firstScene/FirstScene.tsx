import React from 'react';
import test from '../../../assets/startWindow/test.png';
import tornado from '../../../assets/startWindow/tornado.gif';
import logoStart from '../../../assets/startWindow/logoStart.png';
import hasageFight from '../../../assets/startWindow/hasageFight.png';
import { HasagePlay } from '../../../assets/characters';
import s from './firstScene.module.scss';

const FirstScene = () => {
  setTimeout(() => {
    const helpWindoow = document.querySelector('#firstScene');
    helpWindoow?.classList.add(s.opacity1);
  }, 10000);

  return (
    <div className={s.wrapper}>
      <img className={s.hasage} src={hasageFight} alt="qwe" />
      <img className={s.hasagePlay} src={HasagePlay} alt="qwe" />
      <img className={s.tornado} src={tornado} alt="qwe" />

      <div>
        <img className={s.logoStart} src={logoStart} alt="lol" />
        <img className={s.logoTest} src={test} alt="lol" />
      </div>

      <div id="firstScene" className={s.scrollToStartAlert}>
        Scroll down to start!
      </div>
    </div>
  );
};

export default FirstScene;
