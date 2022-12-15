import React from 'react';
import DialogPerson from '../dialogPerson/DialogPerson';
import { useAppSelector } from '../../../hooks';
import LeftButtons from '../buttons/LeftButtons';
import RightButtons from '../buttons/RightButtons';
import LastSceneStory from '../lastSceneStory/LastSceneStory';
import cl from 'classnames';
import s from './Dialog.module.scss';

interface IDialogScene {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const DialogScene: React.FC<IDialogScene> = ({ page, setPage }) => {
  const { sentences } = useAppSelector((state) => state.story);

  return (
    <div
      className={cl({
        [s.dialogScene]: true,
        [s.firstBg]: sentences[page] && sentences[page].bg === 'ViegoFall',
        [s.blackBg]: sentences[page] && sentences[page].bg === 'Black',
        [s.winterHome]: sentences[page] && sentences[page].bg === 'winterHome',
        [s.homeInside]: sentences[page] && sentences[page].bg === 'homeInside',
      })}
    >
      {page !== sentences.length ? (
        <>
          <LeftButtons replic={page} setReplic={setPage} />
          <DialogPerson
            position={sentences[page].position}
            person={sentences[page].image}
            name={sentences[page].name}
            text={sentences[page].text}
          />
          <RightButtons replic={page} setReplic={setPage} />
        </>
      ) : (
        <LastSceneStory />
      )}
    </div>
  );
};

export default DialogScene;
