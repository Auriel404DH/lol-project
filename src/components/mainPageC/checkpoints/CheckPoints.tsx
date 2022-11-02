import React from 'react';
import s from './CheckPoints.module.scss';

const CheckPoints = ({ checkPoints }: { checkPoints: Array<() => void> }) => {
  return (
    <>
      {checkPoints.map((check, i) => {
        return (
          <div key={`${i}_${check}`}>
            <div ref={check} className={s.checkPoint} />
            {/* <div className={s.checkPoint} /> */}
            {/* <div className={s.checkPoint} /> */}
          </div>
        );
      })}
    </>
  );
};

export default CheckPoints;
