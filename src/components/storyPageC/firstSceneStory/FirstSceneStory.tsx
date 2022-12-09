import React from 'react';

const FirstSceneStory = ({
  setStart,
  start,
}: {
  start: boolean;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div
        onClick={() => setStart(!start)}
        className="fixed cursor-pointer flex items-center text-4xl rounded-2xl border-2 border-mainBorder justify-center w-3/6 h-1/6 left-96 top-48 bg-mainBG2 z-50"
      >
        <div>Click here to start</div>
      </div>
      <div
        onClick={() => setStart(!start)}
        className="relative cursor-pointer flex items-center text-4xl rounded-2xl border-2 border-mainBorder justify-center p-6 w-2/6 h-1/6 mx-auto top-96 bg-mainBG2 z-50"
      >
        <div>Click here to start</div>
      </div>
    </>
  );
};

export default FirstSceneStory;
