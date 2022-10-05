import React from 'react';
import s from './DialogPerson.module.scss';
import DialogeWindow from '../dialogTextArea/DialogTextArea';
import cl from 'classnames';

const DialogPerson = ({
  person,
  name,
  text,
  left,
  isView,
  isNextView,
  isLast,
}: {
  person: string;
  name: string;
  text: string;
  left: boolean;
  isView: boolean;
  isNextView?: boolean;
  isLast?: boolean;
}) => {
  return (
    <div
      className={cl({
        [s.item]: true,
        [s.opacity1]: isView && !isNextView,
      })}
    >
      <img className={cl({ [s.item_left]: left, [s.item_right]: !left })} src={person} alt="" />
      <DialogeWindow who={name} text={text} />
    </div>
  );
};

export default DialogPerson;
