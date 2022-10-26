import React from 'react';
import ResultWindow from '../../components/testPageC/resultWindow/ResultWindow';
import FrameForTest from '../../components/testPageC/testWindow/FrameForTest';
import { questionAnswersType } from '../../models/types';
import questions from '../../questions.json';

//.map((answer) => answer.text

const TestPage = () => {
  const [step, setStep] = React.useState<number>(0);
  const questionsTitle: string[] = questions.map((el) => el.question);
  const questionAnswers: questionAnswersType[] = questions.map((el) => el.answers);
  const questionsCount: number = questionsTitle.length;

  return (
    <div className="flex-1 flex">
      <div>qwe</div>
      {step !== questionsCount ? (
        <FrameForTest
          questionsCount={questionsCount}
          questionsTitle={questionsTitle}
          questionsAnswers={questionAnswers}
          step={step}
          setStep={setStep}
        />
      ) : (
        <ResultWindow />
      )}
      <div>qwe</div>
    </div>
  );
};

export default TestPage;
