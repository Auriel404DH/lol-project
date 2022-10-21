import React from 'react';
import bg from '../../assets/bg/lol.mp4';
import bgLogo from '../../assets/bg/bgPhoto.jpg';
import { Fiora, Orn, Reketon, WarWick, Xayah, Hasage, HasagePlay } from '../../assets/characters';
import { CheckPoints, DialogPerson } from '../../components/mainPageC';
import { useInView } from 'react-intersection-observer';
import { NAMES } from '../../models/MainPage';
import Sentences from '../../Sentences.json';
import s from './MainPage.module.scss';

const MainPage: React.FC = () => {
  const { ref: ref1, inView: inView1 } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();
  const { ref: ref3, inView: inView3 } = useInView();
  const { ref: ref4, inView: inView4 } = useInView();
  const { ref: ref5, inView: inView5 } = useInView();
  const { ref: ref6, inView: inView6 } = useInView();
  const { ref: ref7, inView: inView7 } = useInView();

  const refs = [ref1, ref2, ref3, ref4, ref5, ref6, ref7];

  React.useEffect(() => {
    const bg = document.querySelector('#bg');
    bg?.classList.add(s.opacity1);
  }, []);

  return (
    <div id="bg" className={s.main}>
      <DialogPerson
        isView={inView1}
        isNextView={inView2}
        left={true}
        person={Xayah}
        name={NAMES.Xayah}
        text={Sentences.Xayah.first}
      />

      <DialogPerson
        isView={inView2}
        isNextView={inView3}
        left={false}
        person={Orn}
        name={NAMES.Orn}
        text={Sentences.Orn.first}
      />

      <DialogPerson
        isView={inView3}
        isNextView={inView4}
        left={true}
        person={WarWick}
        name={NAMES.WarWick}
        text={Sentences.WarWick.first}
      />

      <DialogPerson
        isView={inView4}
        isNextView={inView5}
        left={false}
        person={Reketon}
        name={NAMES.Reketon}
        text={Sentences.Reketon.first}
      />

      <DialogPerson
        isView={inView5}
        isNextView={inView6}
        left={true}
        person={Fiora}
        name={NAMES.Fiora}
        text={Sentences.Fiora.first}
      />

      <DialogPerson
        isView={inView6}
        isNextView={inView7}
        left={false}
        person={HasagePlay}
        name={NAMES.HasagePlay}
        text={Sentences.Hasage.first}
      />

      <DialogPerson
        isLast={true}
        isView={inView7}
        left={true}
        person={Hasage}
        name={NAMES.Hasage}
        text={Sentences.Hasage.first}
      />

      <div className={s.main__content}>
        <div className="mt-max opacity-0 border" />
        <CheckPoints checkPoints={refs} />
      </div>

      <video loop className={s.main__bg} preload="auto" poster={bgLogo} autoPlay muted>
        <source type="video/mp4" src={bg} />
      </video>
    </div>
  );
};

export default MainPage;
