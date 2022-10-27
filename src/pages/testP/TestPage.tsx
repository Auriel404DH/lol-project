import React from 'react';
import FrameForTest from '../../components/testPageC/frameForTest/FrameForTest';
import questions from '../../questions.json';

const TestPage = () => {
  const [step, setStep] = React.useState<number>(0);

  const questionsTitle: string[] = questions.map((el) => el.question);
  const questionAnswers: string[][] = questions.map((el) => el.answers);
  const questionsCount: number = questionsTitle.length;

  return (
    <div className="flex-1 flex">
      <div>qwe</div>
      <FrameForTest
        questionsCount={questionsCount}
        questionsTitle={questionsTitle}
        questionsAnswers={questionAnswers}
        step={step}
        setStep={setStep}
      />
      <div>qwe</div>
    </div>
  );
};

export default TestPage;
