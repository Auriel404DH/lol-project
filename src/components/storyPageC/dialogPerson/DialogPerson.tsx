import React from 'react';
import { IDialogPerson } from '../../../models/IDialogPerson';
import DialogTextArea from '../dialogTextArea/DialogTextArea';
import s from './DialogPerson.module.scss';
import cl from 'classnames';

const DialogPerson = ({ person, name, text, position }: IDialogPerson) => {
  return (
    <div className={s.item}>
      <img
        className={cl({
          [s.item_left]: position === 'left',
          [s.item_center]: position === 'center',
          [s.item_right]: position === 'right',
        })}
        src={person}
        alt=""
      />
      <DialogTextArea who={name} text={text} />
    </div>
  );
};

export default DialogPerson;
