import React from 'react';
import { useNavigate } from 'react-router-dom';
import { startStory } from '../../../assets/characters';
import snowing from '../../../assets/decorations/snowing.gif';
import s from './firstScene.module.scss';

interface IFirstSceneStory {
  userPage: number;
  page: number;
  start: boolean;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
}

const FirstSceneStory: React.FC<IFirstSceneStory> = ({
  setStart,
  start,
  setPage,
  userPage,
}) => {
  const navigate = useNavigate();
  const navigateToMainMenu = () => navigate('/');

  const setUserLastPage = () => {
    if (userPage) {
      setStart(!start);
      setPage(userPage);
    }
  };

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.content}>
          <div className={s.image}>
            <img src={startStory} alt="" />
          </div>
          <div className={s.menu}>
            <div className={s.story}>Viego New Year story</div>
            <div>
              <div onClick={() => setStart(!start)} className={s.startButton}>
                Start
              </div>
              <div onClick={() => setUserLastPage()} className={s.continueButton}>
                Continue
              </div>
              <div className="mx-auto w-fit mt-2">Last page: {userPage}</div>
            </div>
            <div onClick={() => navigateToMainMenu()} className={s.exitButton}>
              Exit
            </div>
          </div>
        </div>
      </div>
      <div className={s.snow}>
        <img src={snowing} alt="" />
      </div>
    </>
  );
};

export default FirstSceneStory;
