import React from 'react';
import { useNavigate } from 'react-router-dom';
import restart from '../../../assets/decorations/restart.png';
import exit from './../../../assets/decorations/exit.png';

const LeftButtons = ({
  setReplic,
}: {
  setReplic: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const navigate = useNavigate();

  const navigateToMainPage = () => navigate('/');

  return (
    <div>
      <div
        onClick={navigateToMainPage}
        className="z-50 relative cursor-pointer bottom-16 rounded-xl border-2 border-mainBG2 bg-main p-5 text-main"
      >
        <img className="w-6" src={exit} alt="arr" />
      </div>
      <div
        onClick={() => setReplic(0)}
        className="z-50 relative cursor-pointer bottom-10 rounded-xl border-2 border-mainBG2 bg-main rotate-180 p-5 text-main"
      >
        <img className="w-6" src={restart} alt="arr" />
      </div>
    </div>
  );
};

export default LeftButtons;
