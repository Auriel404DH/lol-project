import React from 'react';
import FrameForTest from '../../components/testPageC/frameForTest/FrameForTest';
import ResultWindow from '../../components/testPageC/resultWindow/ResultWindow';
import { fetchCharacters } from '../../store/actions/CharactersAction';
import { QuestionAnswers } from '../../models/types';
import { useAppDispatch, useAppSelector } from '../../hooks';
import BgVideo from '../../components/mainPageC/bgVideo/BgVideo';
import bg from '../../assets/bg/lol.mp4';

const TestPage = () => {
  const dispatch = useAppDispatch();
  const [step, setStep] = React.useState<number>(0);
  const { questions } = useAppSelector((state) => state.answers);

  React.useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  const questionsTitle: string[] = questions.map((el) => el.question);
  const questionAnswers: QuestionAnswers[] = questions.map((el) => el.answers);
  const questionStyles: string[] = questions.map((el) => el.style);
  const questionsCount: number = questionsTitle.length;

  return (
    <>
      <div className="flex-1 flex z-50 relative">
        <div>qwe</div>
        {step !== questionsCount ? (
          <FrameForTest
            questionsCount={questionsCount}
            questionsTitle={questionsTitle}
            questionStyles={questionStyles}
            questionsAnswers={questionAnswers}
            step={step}
            setStep={setStep}
          />
        ) : (
          <ResultWindow setStep={setStep} />
        )}
        <div>qwe</div>
      </div>
      <BgVideo bg={bg} />
    </>
  );
};

export default TestPage;
