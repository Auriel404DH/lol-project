import styles from './DialogeWindow.module.scss';
import frame2 from '../../../assets/bg/frame2.png';
import decor from '../../../assets/decorations/decor.png';
import WavyText from '../../sharedC/wavyText/WavyText';

const DialogeWindow = ({ who, text }: { who: string; text: string }) => {
  return (
    <div className={styles.border}>
      <div className={styles.window}>
        <img className={styles.img} src={frame2} alt="LOL" />
        <img className={`${styles.decorImg} ${styles.decorImgTR}`} src={decor} alt="Декор" />
        <img className={`${styles.decorImg} ${styles.decorImgTL}`} src={decor} alt="Декор" />
        <img className={`${styles.decorImg} ${styles.decorImgBR}`} src={decor} alt="Декор" />
        <img className={`${styles.decorImg} ${styles.decorImgBL}`} src={decor} alt="Декор" />
        <h2 className={styles.name}>{who}</h2>
        <div className={styles.window__textArea}>
          <p className={styles.text}>
            <WavyText value={text} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default DialogeWindow;
