import React from 'react';
import { useAppSelector } from '../../../hooks';
import { LeftButtons, RightButtons, LastSceneStory, DialogPerson } from '../';
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
        [s.street]: sentences[page] && sentences[page].bg === 'street',
        [s.libraryShop]: sentences[page] && sentences[page].bg === 'libraryShop',
        [s.catShop]: sentences[page] && sentences[page].bg === 'catShop',
        [s.samiraGift]: sentences[page] && sentences[page].bg === 'samiraGift',
        [s.reketonsGift]: sentences[page] && sentences[page].bg === 'reketonsGift',
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
            secondImage={sentences[page].secondImage}
            secondPosition={sentences[page].secondPosition}
            secondPerson={sentences[page].secondPerson}
            isSecondMain={sentences[page].isSecondMain}
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
