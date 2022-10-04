import React from 'react';
import styles from './ButtonMainPage.module.scss';

const ButtonMainPage = ({ value }: { value: string }) => {
  const ff = ['top', 'right', 'bottom', 'left'];

  return (
    <div className={styles.wrapper}>
      <button className={`${styles.wrapper__btn} ${styles.btn}`}>
        {ff.map((el, idx) => (
          <span key={idx} className={`${styles.btn__line} ${styles['btn__line--' + el]}`}></span>
        ))}
        {value}
      </button>
    </div>
  );
};

export default ButtonMainPage;
