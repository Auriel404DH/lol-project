import React from 'react';
import { useInView } from 'react-intersection-observer';
import CheckPointsComponent from '../../components/storyPageC/checkPointsComponent/CheckPointsComponent';
import DialogScene from '../../components/storyPageC/dialogScene/DialogScene';
import FirstSceneStory from '../../components/storyPageC/firstSceneStory/FirstSceneStory';

const StoryPage = () => {
  const { ref: ref1, inView: inView1 } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();
  const { ref: ref3, inView: inView3 } = useInView();
  const { ref: ref4, inView: inView4 } = useInView();
  const { ref: ref5, inView: inView5 } = useInView();
  const { ref: ref6, inView: inView6 } = useInView();
  const { ref: ref7, inView: inView7 } = useInView();
  const { ref: ref8, inView: inView8 } = useInView();

  const refs = [ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8];
  const inViews = [inView1, inView2, inView3, inView4, inView5, inView6, inView7, inView8];
  const isSceneStart = inViews.some((element) => element === true);

  return (
    <>
      {!isSceneStart && <FirstSceneStory />}
      <DialogScene inViews={inViews} />
      <CheckPointsComponent refs={refs} />
    </>
  );
};

export default StoryPage;
