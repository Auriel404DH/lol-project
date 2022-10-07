import React from 'react';
import ButtonMainPage from '../../components/sharedC/buttons/ButtonMainPage';
import DialogeWindow from '../../components/mainPageC/dialogTextArea/DialogTextArea';
import BigButton from '../../components/sharedC/buttons/BigButton';
import QuizQuestion from '../../components/sharedC/quizQuestion/QuizQuestion';
import WavyText from '../../components/sharedC/wavyText/WavyText';

const TestPage = () => {
  return (
    <div className="ml-12">
      <div>TestPage</div>
      <QuizQuestion />
      <WavyText value='Мать ебал ебал мать мать ебал'/>
    </div>
  );
};

export default TestPage;
