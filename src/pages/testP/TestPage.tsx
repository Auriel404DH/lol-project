// import React from 'react';
// import ButtonMainPage from '../../components/sharedC/buttons/ButtonMainPage';
// import DialogeWindow from '../../components/mainPageC/dialogTextArea/DialogTextArea';
// import BigButton from '../../components/sharedC/buttons/BigButton';
import QuizQuestion from '../../components/sharedC/quizQuestion/QuizQuestion';
import WavyText from '../../components/sharedC/wavyText/WavyText';
import SlowAppearText from '../../components/sharedC/slowAppearText/SlowAppearText';
import { TRUE, Value } from 'sass';
import FrameForTest from '../../components/testPageC/frameForTest/FrameForTest';
const TestPage = () => {
  return (
    <div className="ml-12">
      <div>TestPage</div>
       <WavyText value='Этот текст - волна'/><br/>
       <SlowAppearText value='ТекстТекстТекстТекстТекст'/>
       <FrameForTest/>
    </div>
  );
};

export default TestPage;
