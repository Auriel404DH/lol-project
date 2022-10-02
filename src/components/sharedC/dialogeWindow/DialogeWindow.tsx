import React from 'react';
import styles from './DialogeWindow.module.scss'
import frame2 from '../../../assets/bg/frame2.png'

const DialogeWindow = ({who, text}:{who:string, text:string}) => {
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.border}>
        <div className={styles.window}>
          <img className={styles.img} src={frame2} alt="" />
          <h2 className={styles.name}>{who}</h2>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default DialogeWindow;
