import React from 'react';
import DialogPerson from '../dialogPerson/DialogPerson';
import { useAppSelector } from '../../../hooks';
import LeftButtons from '../buttons/LeftButtons';
import RightButtons from '../buttons/RightButtons';
import LastSceneStory from '../lastSceneStory/LastSceneStory';
import cl from 'classnames';
import s from './Dialog.module.scss';

const DialogScene = () => {
  const [replic, setReplic] = React.useState<number>(0);

  const { sentences } = useAppSelector((state) => state.story);

  return (
    <div
      className={cl({
        [s.dialogScene]: true,
        [s.firstBg]: sentences[replic] && sentences[replic].bg === 'ViegoFall',
        [s.blackBg]: sentences[replic] && sentences[replic].bg === 'Black',
        [s.winterHome]: sentences[replic] && sentences[replic].bg === 'winterHome',
        [s.homeInside]: sentences[replic] && sentences[replic].bg === 'homeInside',
      })}
    >
      {replic !== sentences.length ? (
        <>
          <LeftButtons setReplic={setReplic} />
          <DialogPerson
            position={sentences[replic].position}
            person={sentences[replic].image}
            name={sentences[replic].name}
            text={sentences[replic].text}
          />
          <RightButtons replic={replic} setReplic={setReplic} />
        </>
      ) : (
        <LastSceneStory />
      )}
    </div>
  );
};

export default DialogScene;
