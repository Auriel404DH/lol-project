import React from 'react';
import s from './WavyText.module.scss';
import cl from 'classnames';

const WavyText = ({ value }: { value: string }) => {
  const [animated, setAnimated] = React.useState<boolean>(true);

  const abc = value.split('');

  return (
    <>
      {abc.map((e, i) => {
        setTimeout(() => {
          setAnimated(!animated);
        }, 1000);

        return (
          <div
            id="#elem"
            key={`${e}_${i}`}
            className={cl({ [s.text]: true, [s.textAnimated]: animated })}
          >
            {e}
          </div>
        );
      })}
    </>
  );
};

export default WavyText;
