import React from 'react';
import bg from '../../../assets/bg/lol.mp4';
import bgLogo from '../../../assets/bg/bgPhoto.jpg';
import s from './video.module.scss';

const BgVideo = () => {
  return (
    <video loop className={s.main__bg} preload="auto" poster={bgLogo} autoPlay muted>
      <source type="video/mp4" src={bg} />
    </video>
  );
};

export default BgVideo;
