import React from 'react';
import { useInView } from 'react-intersection-observer';
import DialogScene from '../../components/mainPageC/dialogScene/DialogScene';
import CheckPointsComponent from '../../components/mainPageC/checkPointsComponent/CheckPointsComponent';
import FirstScene from '../../components/mainPageC/firstScene/FirstScene';
import BgVideo from '../../components/mainPageC/bgVideo/BgVideo';
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
  const inViews = [inView1, inView2, inView3, inView4, inView5, inView6, inView7];
  const isSceneOpen = inViews.some((element) => element === true);

  React.useEffect(() => {
    const bg = document.querySelector('#bg');
    bg?.classList.add(s.opacity1);
  }, []);

  return (
    <div id="bg" className={s.main}>
      {!isSceneOpen && <FirstScene />}
      <DialogScene inViews={inViews} />
      <CheckPointsComponent refs={refs} />
      <BgVideo />
    </div>
  );
};

export default MainPage;
