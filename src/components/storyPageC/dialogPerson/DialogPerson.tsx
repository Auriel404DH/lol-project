import React from 'react';
import { IDialogPerson } from '../../../models/IDialogPerson';
import DialogTextArea from '../dialogTextArea/DialogTextArea';
import s from './DialogPerson.module.scss';
import cl from 'classnames';

const DialogPerson = ({ person, name, text, left }: IDialogPerson) => {
  return (
    <div className={s.item}>
      <img className={cl({ [s.item_left]: left, [s.item_right]: !left })} src={person} alt="" />
      <DialogTextArea who={name} text={text} />
    </div>
  );
};

export default DialogPerson;
