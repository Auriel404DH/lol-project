import React from 'react';
import { useNavigate } from 'react-router-dom';
import { allNG } from '../../../assets/characters';
import s from './lastScene.module.scss';

const LastSceneStory: React.FC = () => {
  const navigate = useNavigate();
  const navigateToMenu = () => navigate('/');

  return (
    <div className={s.wrapper}>
      <div className={s.buttons}>
        <div className={s.buttonsBlock}>
          <div className={s.startButton}>The End!</div>
          <div onClick={() => navigateToMenu()} className={s.exitButton}>
            Exit
          </div>
        </div>
      </div>
      <div className={s.image}>
        <img src={allNG} alt="" />
      </div>
    </div>
  );
};

export default LastSceneStory;
