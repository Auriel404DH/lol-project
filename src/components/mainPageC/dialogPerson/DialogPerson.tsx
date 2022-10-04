import React from 'react';
import s from './DialogPerson.module.scss';
import DialogeWindow from '../dialogTextArea/DialogTextArea';
import cl from 'classnames';

const DialogPerson = ({
  person,
  name,
  text,
  left,
}: {
  person: string;
  name: string;
  text: string;
  left: boolean;
}) => {
  return (
    <div className={s.item}>
      <img className={cl({ [s.item_left]: left, [s.item_right]: !left })} src={person} alt="" />
      <DialogeWindow who={name} text={text} />
    </div>
  );
};

export default DialogPerson;
