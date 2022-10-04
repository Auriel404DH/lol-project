import React from 'react';
import bg from '../../assets/bg/lol.mp4';
import bgLogo from '../../assets/bg/bgPhoto.jpg';
import { Fiora, Orn, Reketon, WarWick, Xayah, Hasage, HasagePlay } from '../../assets/characters';
import DialogPerson from '../../components/mainPageC/dialogPerson/DialogPerson';
import s from './MainPage.module.scss';
import { useInView } from 'react-intersection-observer';

const MainPage: React.FC = () => {
  const { ref: ref1, inView: inView1 } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();
  const { ref: ref3, inView: inView3 } = useInView();
  const { ref: ref4, inView: inView4 } = useInView();

  React.useEffect(() => {
    const bg = document.querySelector('#bg');
    bg?.classList.add(s.opacity1);
  }, []);

  return (
    <div id="bg" className={s.main}>
      {inView1 && !inView2 ? (
        <DialogPerson left={true} person={Xayah} name={'Xayah'} text={'Хей'} />
      ) : (
        ''
      )}
      {inView2 && !inView3 ? (
        <DialogPerson left={false} person={Orn} name={'Orn'} text={'Хей'} />
      ) : (
        ''
      )}
      {inView3 && !inView4 ? (
        <DialogPerson left={true} person={WarWick} name={'Warwick'} text={'Хей'} />
      ) : (
        ''
      )}
      {inView4 ? <DialogPerson left={false} person={Reketon} name={'Lox'} text={'Хей'} /> : ''}

      <div className={s.main__content}>
        <div className="mt-max border w-fit" />
        <div ref={ref1} className="my-checkpoint border w-fit" />
        <div ref={ref2} className="my-checkpoint border w-fit" />
        <div ref={ref3} className="my-checkpoint border w-fit" />
        <div ref={ref4} className="my-checkpoint border w-fit" />
        <div className="my-checkpoint border w-fit" />
        <div className="my-checkpoint border w-fit" />
        <div className="my-checkpoint border w-fit" />
        <div className="my-checkpoint border w-fit" />
      </div>

      <video className={s.main__bg} preload="auto" poster={bgLogo} autoPlay muted>
        <source type="video/mp4" src={bg} />
      </video>
    </div>
  );
};

export default MainPage;

{
  /* <div id="helperArr" className={s.main__helperArrow}>
        qwe
      </div> */
}

{
  /* <video className={s.main__bg} preload="auto" poster={bgLogo} autoPlay muted>
        <source type="video/mp4" src={bg} />
      </video> */
}

{
  /* <div className="mt-96">
          <img className={s.main__content_item} src={Xayah} alt="" />
        </div>
        <img className={s.main__content_item} src={Fiora} alt="" />
        <img className={s.main__content_item} src={Orn} alt="" />
        <img className={s.main__content_item} src={Reketon} alt="" />
        <img className={s.main__content_item} src={WarWick} alt="" />
        <img className={s.main__content_item} src={Hasage} alt="" />
        <img className={s.main__content_item} src={HasagePlay} alt="" /> */
}
