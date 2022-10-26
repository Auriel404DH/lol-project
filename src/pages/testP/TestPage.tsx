import React from 'react';
import ResultWindow from '../../components/testPageC/resultWindow/ResultWindow';
import FrameForTest from '../../components/testPageC/testWindow/FrameForTest';
import { questionAnswersType } from '../../models/types';
import questions from '../../questions.json';

//.map((answer) => answer.text

const TestPage = () => {
  const [step, setStep] = React.useState<number>(0);
  const questionsTitle: string = questions[step].question;
  const questionAnswers: questionAnswersType[] = questions[step].answers;
  const questionsCount: number = questions.length;

  return (
    <div className="flex-1 flex">
      <div>qwe</div>
      {step !== questionsCount ? (
        <FrameForTest
          questionsCount={questionsCount}
          questionsTitle={questionsTitle}
          questionsAnswers={questionAnswers}
          questionId={questions[step].id}
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
