import YourCharacter from '../yourCharacter/YourCharacter';
import { useAppSelector } from '../../../hooks/hooks';
import AllCharacters from '../../../characters.json';
import useFilter from '../../../hooks/useFilter';
import s from './result.module.scss';

const ResultWindow = () => {
  const stateParams = useAppSelector(({ characters }) => characters?.answers2);

  const yourCharacters = useFilter({ stateParams, AllCharacters });

  return (
    <div className={s.wrapper}>
      <div className={s.entryText}>
        <div className={s.congratulations}>Поздравляем!</div>
        <div className={s.yourCharacters}>Ваш персонаж это: </div>
      </div>
      {yourCharacters.map((character, i) => (
        <YourCharacter character={character} key={i} />
      ))}
    </div>
  );
};

export default ResultWindow;
