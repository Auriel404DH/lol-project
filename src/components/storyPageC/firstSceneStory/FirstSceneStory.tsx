import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './firstScene.module.scss';

interface IFirstSceneStory {
  page: number;
  start: boolean;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
}

const FirstSceneStory: React.FC<IFirstSceneStory> = ({ setStart, start, page, setPage }) => {
  const navigate = useNavigate();
  
  const navigateToMainMenu = () => navigate('/');

  const setUserLastPage = () => {
    setStart(!start);
    setPage(page);
  };

  return (
    <div className={s.wrapper}>
      <div>
        <div onClick={() => setStart(!start)} className={s.startButton}>
          Start
        </div>
        <div onClick={() => setUserLastPage()} className={s.continueButton}>
          Continue
        </div>
        <div onClick={() => navigateToMainMenu()} className={s.exitButton}>
          Exit
        </div>
      </div>
    </div>
  );
};

export default FirstSceneStory;
