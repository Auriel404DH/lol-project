import React from 'react';
import arrow from '../../../assets/decorations/arrow.png';

const RightButtons = ({
  replic,
  setReplic,
}: {
  replic: number;
  setReplic: React.Dispatch<React.SetStateAction<number>>;
}) => {
  document.onkeydown = (key) => {
    if (key.code === 'Space' || key.key === 'Enter') {
      setReplic(replic + 1);
    }
  };

  return (
    <div>
      <div
        onClick={() => setReplic(replic + 1)}
        className="z-50 relative cursor-pointer bottom-16 rounded-xl border-2 border-mainBG2 bg-main p-5 text-main"
      >
        <img src={arrow} alt="arr" />
      </div>
      <div
        onClick={() => replic !== 0 && setReplic(replic - 1)}
        className="z-50 relative cursor-pointer bottom-10 rounded-xl border-2 border-mainBG2 bg-main rotate-180 p-5 text-main"
      >
        <img src={arrow} alt="arr" />
      </div>
    </div>
  );
};

export default RightButtons;
