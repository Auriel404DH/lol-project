import React from 'react';
import cl from 'classnames';
import s from './lastScene.module.scss';

const LastSceneStory = ({ isView, isNextView }: { isView: boolean; isNextView: boolean }) => {
  return (
    <div
      className={cl({
        [s.item]: true,
        [s.opacity1]: isView && !isNextView,
      })}
    >
      <div>qwe</div>
    </div>
  );
};

export default LastSceneStory;
