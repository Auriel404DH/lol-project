import React from 'react';
import bgLogo from '../../../assets/bg/bgPhoto.jpg';
import s from './video.module.scss';

const BgVideo = ({ bg }: { bg: string }) => {
  return (
    <video loop className={s.main__bg} preload="auto" poster={bgLogo} autoPlay muted>
      <source type="video/mp4" src={bg} />
    </video>
  );
};

export default BgVideo;
