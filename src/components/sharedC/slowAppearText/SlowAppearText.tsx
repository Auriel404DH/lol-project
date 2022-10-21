import React, { ReactPropTypes } from 'react';
import styles from './SlowAppearText.module.scss';
import WavyText from '../wavyText/WavyText';

const SlowAppearText = ({ value, wavy = false }: { value: string; wavy?: boolean }) => {
  const v = value.split('');

  return (
    <>
      {v.map((el, idx) => {
        return (
          <span
            className={wavy ? styles.span : styles.spann}
            style={{ animationDelay: idx / 25 + 's' }}
            key={idx}
          >
            {el}
          </span>
        );
      })}
    </>
  );
};

export default SlowAppearText;
