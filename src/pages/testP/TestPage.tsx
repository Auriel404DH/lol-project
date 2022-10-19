import React from 'react';
import FrameForTest from '../../components/testPageC/frameForTest/FrameForTest';
import questions from '../../questions.json';

const TestPage = () => {
  const [step, setStep] = React.useState<number>(0);

  const questionsTitle = questions.map((el) => el.question);
  const questionAnswers = questions.map((el) => el.answers);

  return (
    <div className="flex-1 flex">
      <div>qwe</div>
      <FrameForTest
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
