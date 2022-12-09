import { IIcon } from '../../models/IIcon';
import s from './icon.module.scss';

const LeftArrow = ({ width, height }: IIcon) => {
  return (
    <div className={s['btn-back']}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width={width}
        height={height}
        viewBox="0 0 256 256"
      >
        <defs></defs>
        <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
          <path
            d="M 90 90 V 0 L 0 45 L 90 90 z"
            transform=" matrix(1 0 0 1 0 0) "
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
};

export default LeftArrow;
