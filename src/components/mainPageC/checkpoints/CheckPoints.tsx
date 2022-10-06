import React from 'react';
import s from './CheckPoints.module.scss';

const CheckPoints = ({ checkPoints }: { checkPoints: Array<() => void> }) => {
  console.log(checkPoints);

  return (
    <>
      {checkPoints.map((check, i) => {
        return (
          <>
            <div ref={check} className={s.checkPoint} />
            <div className={s.checkPoint} />
            <div className={s.checkPoint} />
          </>
        );
      })}
    </>
  );
};

export default CheckPoints;
