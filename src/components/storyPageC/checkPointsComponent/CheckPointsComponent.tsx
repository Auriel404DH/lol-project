import React from 'react';
import CheckPoints from '../../mainPageC/checkpoints/CheckPoints';
import s from './check.module.scss';

const CheckPointsComponent = ({ refs }: { refs: Array<() => void> }) => {
  return (
    <div className={s.main__content}>
      <div className="mt-max opacity-0 border" />
      <CheckPoints checkPoints={refs} />
    </div>
  );
};

export default CheckPointsComponent;
