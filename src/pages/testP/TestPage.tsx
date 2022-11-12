import React from 'react';
import FrameForTest from '../../components/testPageC/frameForTest/FrameForTest';
import ResultWindow from '../../components/testPageC/resultWindow/ResultWindow';
import { fetchCharacters } from '../../store/actions/CharactersAction';
import { useAppDispatch } from '../../hooks/hooks';
import { QuestionAnswers } from '../../models/types';
import questions from '../../questions.json';

const TestPage = () => {
  const dispatch = useAppDispatch();
  const [step, setStep] = React.useState<number>(0);

  const questionsTitle: string[] = questions.map((el) => el.question);
  const questionAnswers: QuestionAnswers[] = questions.map((el) => el.answers);
  const questionsCount: number = questionsTitle.length;

  React.useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

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
