import React from 'react';
import FrameForTest from '../../components/testPageC/frameForTest/FrameForTest';
import ResultWindow from '../../components/testPageC/resultWindow/ResultWindow';
import { fetchCharacters } from '../../store/actions/CharactersAction';
import { QuestionAnswers } from '../../models/types';
import { useAppDispatch } from '../../hooks/hooks';
import questions from '../../questions.json';

const TestPage = () => {
  const dispatch = useAppDispatch();
  const [step, setStep] = React.useState<number>(0);

  React.useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  const questionsTitle: string[] = questions.map((el) => el.question);
  const questionAnswers: QuestionAnswers[] = questions.map((el) => el.answers);
  const questionsCount: number = questionsTitle.length;

  return (
    <div className="flex-1 flex z-50 relative">
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
        <ResultWindow setStep={setStep} />
      )}
      <div>qwe</div>
    </div>
  );
};

export default TestPage;
