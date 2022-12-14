import React from 'react';
import { FrameForTest, ResultWindow } from '../../components/testPageC';
import { fetchCharacters } from '../../store/actions/CharactersAction';
import { QuestionAnswers } from '../../models/types';
import { useAppDispatch, useAppSelector } from '../../hooks';
import BgVideo from '../../components/mainPageC/bgVideo/BgVideo';
import bg from '../../assets/bg/lol.mp4';
import s from './TestPage.module.scss';

const TestPage = () => {
  const dispatch = useAppDispatch();
  const [step, setStep] = React.useState<number>(0);
  const [prevStep, setPrevStep] = React.useState<number[]>([]);
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
      <div className={s.wrapper}>
        <div className={s.border}>.</div>
        {step !== questionsCount ? (
          <FrameForTest
            questionsCount={questionsCount}
            questionsTitle={questionsTitle}
            questionStyles={questionStyles}
            questionsAnswers={questionAnswers}
            step={step}
            setStep={setStep}
            prevStep={prevStep}
            setPrevStep={setPrevStep}
          />
        ) : (
          <ResultWindow setPrevStep={setPrevStep} setStep={setStep} />
        )}
        <div className={s.borderR}>.</div>
      </div>
      <BgVideo bg={bg} />
      <div className={s.blackout}></div>
    </>
  );
};

export default TestPage;
