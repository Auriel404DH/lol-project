import React from 'react';
import cl from 'classnames';
import s from './CheckPoints.module.scss';

const CheckPoints = ({ checkPoints }: { checkPoints: Array<() => void> }) => {
  const last = checkPoints.length - 1;

  return (
    <>
      {checkPoints.map((check, i) => {
        return (
          <div key={`${i}_${check}`}>
            <div
              ref={check}
              className={cl({
                [s.checkPoint]: i !== last,
                [s.checkPointLast]: i === last,
              })}
            />
          </div>
        );
      })}
    </>
  );
};

export default CheckPoints;
