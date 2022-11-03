import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import AllCharacters from '../../../characters.json';
import useFilter from '../../../hooks/useFilter';
import PossibleCharacter from '../possibleCharacters/PossibleCharacter';
import YourCharacter from '../yourCharacter/YourCharacter';
import { removeAnswers } from '../../../store/slices/charactersSlice';
import s from './result.module.scss';

interface IResultWindow {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const ResultWindow: React.FC<IResultWindow> = ({ setStep }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const stateParams = useAppSelector(({ characters }) => characters?.answers2);

  const yourCharacters = useFilter({ stateParams, AllCharacters });

  const navigateToRead = () => {
    dispatch(removeAnswers());
    navigate('/story');
  };
  const navigateToTest = () => {
    dispatch(removeAnswers());
    setStep(0);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.entryText}>
        <div className={s.congratulations}>Поздравляем!</div>
        <div className={s.yourCharacters}>Ваш персонаж:</div>
      </div>
      <div className="flex">
        <div className={s.button__zone}>
          <button onClick={navigateToRead} className={s.button}>
            Прочитать историю
          </button>
        </div>
        {yourCharacters.map((character, i) => (
          <YourCharacter character={character} key={i} />
        ))}
        <div className={s.button__zone}>
          <button onClick={navigateToTest} className={s.button}>
            Пройти тест заново
          </button>
        </div>
      </div>
      <div className={s.recs}>Возможно, вам так же подойдут:</div>
      <div className="flex justify-center">
        {yourCharacters.map((character, i) => (
          <PossibleCharacter character={character} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ResultWindow;
