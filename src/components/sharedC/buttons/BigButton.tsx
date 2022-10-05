import React from 'react';
import styles from './BigButton.module.scss';
import decor from '../../../assets/decorations/lol-decor.png'

const BigButton = ({ value }: { value: string }) => {

  return (
    <div className={styles.wrapper}>
      <a href='../' className={styles.wrapper__btn}>
        <img className={styles.wrapper__img} src={decor} alt="" />
        <p className={styles.btn__value}>{value}</p>
      </a>
    </div>
  );
};

export default BigButton;
