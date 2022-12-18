import React from 'react';
import { IDialogPerson } from '../../../models/IDialogPerson';
import DialogTextArea from '../dialogTextArea/DialogTextArea';
import s from './DialogPerson.module.scss';
import cl from 'classnames';

const DialogPerson = ({
  person,
  name,
  text,
  position,
  secondPerson,
  secondImage,
  secondPosition,
  isSecondMain,
}: IDialogPerson) => {
  return (
    <div className={s.item}>
      <div className="flex">
        {secondPerson && (
          <img
            className={cl({
              [s.item_left]: secondPosition === 'left',
              [s.item_center]: secondPosition === 'center',
              [s.item_right]: secondPosition === 'right',
              [s.item_full]: secondPosition === 'full',

              [s.item_main]: secondPerson && isSecondMain,
              [s.item_NoMain]: secondPerson && !isSecondMain,
            })}
            src={secondImage}
            alt=""
          />
        )}
        <img
          className={cl({
            [s.item_left]: position === 'left',
            [s.item_center]: position === 'center',
            [s.item_right]: position === 'right',
            [s.item_full]: position === 'full',

            [s.item_NoMain]: isSecondMain,
            [s.item_main]: secondPerson && !isSecondMain,
          })}
          src={person}
          alt=""
        />
      </div>
      <DialogTextArea who={name} text={text} />
    </div>
  );
};

export default DialogPerson;
