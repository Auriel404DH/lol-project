import React from 'react';
import s from './WavyText.module.scss';

const WavyText = ({ value }: { value: string }) => {
  const mas = value.split("")
  return (
    <div className={s.wavy}>
      {mas.map((el,idx) => {
        return <span className={s.span} style={{animationDelay: idx/25+"s"}} key={idx}>{el}</span> 
      })}
    </div>
  );
};

export default WavyText;
