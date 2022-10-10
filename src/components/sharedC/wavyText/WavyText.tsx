import React from 'react';
import s from './WavyText.module.scss';

const WavyText = ({ value }: { value: string }) => {
  const mas = value.split('');
  return (
    <>
      {mas.map((el, idx) => {
        return (
          <span className={s.span} style={{ animationDelay: idx / 25 + 's' }} key={idx}>
            {el}
          </span>
        );
      })}
    </>
  );
};

export default WavyText;
