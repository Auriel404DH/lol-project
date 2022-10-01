import React from 'react';
import bg from '../../assets/bg/lol.mp4';
import bgLogo from '../../assets/bg/bgPhoto.jpg';
import { Fiora, Orn, Reketon, WarWick, Xayah, Hasage, HasagePlay } from '../../assets/characters';
import s from './MainPage.module.scss';

const MainPage: React.FC = () => {
  React.useEffect(() => {
    let countSec: number = 0;

    const bg = document.querySelector('#bg');
    const helperArr = document.querySelector('#helperArr');
    bg?.classList.add(s.opacity1);

    setInterval(() => {
      countSec += 1;
    }, 1000);

    if (countSec >= 5) {
      helperArr?.classList.add(s.ArrowOpacity1);
    }
  }, []);

  return (
    <div id="bg" className={s.main}>
      <div id="helperArr" className={s.main__helperArrow}>
        qwe
      </div>
      <div className={s.main__content}>
        <img className={s.main__content_item} src={Xayah} alt="" />
        <img className={s.main__content_item} src={Fiora} alt="" />
        <img className={s.main__content_item} src={Orn} alt="" />
        <img className={s.main__content_item} src={Reketon} alt="" />
        <img className={s.main__content_item} src={WarWick} alt="" />
        <img className={s.main__content_item} src={Hasage} alt="" />
        <img className={s.main__content_item} src={HasagePlay} alt="" />
      </div>

      <video className={s.main__bg} preload="auto" poster={bgLogo} autoPlay muted>
        <source type="video/mp4" src={bg} />
      </video>
    </div>
  );
};

export default MainPage;
