import React from 'react';
import DialogScene from '../../components/storyPageC/dialogScene/DialogScene';
import FirstSceneStory from '../../components/storyPageC/firstSceneStory/FirstSceneStory';

const StoryPage = () => {
  const [start, setStart] = React.useState<boolean>(false);

  return <>{!start ? <FirstSceneStory start={start} setStart={setStart} /> : <DialogScene />}</>;
};

export default StoryPage;
