import React from 'react';
import DialogScene from '../../components/storyPageC/dialogScene/DialogScene';
import FirstSceneStory from '../../components/storyPageC/firstSceneStory/FirstSceneStory';

const StoryPage = () => {
  const [start, setStart] = React.useState<boolean>(false);
  const [replic, setReplic] = React.useState<number>(0);
  const userPage = localStorage.getItem('replic');

  return (
    <>
      {!start ? (
        <FirstSceneStory
          userPage={Number(userPage)}
          setPage={setReplic}
          page={replic}
          start={start}
          setStart={setStart}
        />
      ) : (
        <DialogScene setPage={setReplic} page={replic} />
      )}
    </>
  );
};

export default StoryPage;
