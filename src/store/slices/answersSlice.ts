import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IActionAnswer2 } from '../../models/IAnswerAction';

type IStateAnswer = {
  text: string;
  param: string | string[];
  nextStep: number;
};

type IQuestion = {
  id: number;
  style: string;
  question: string;
  answers: IStateAnswer[];
};

type InitialState = {
  questions: IQuestion[];
  answers2: any;
};

const initialState: InitialState = {
  questions: [
    {
      id: 0,
      question: 'Намечается бой. Я...',
      style: 'PersonClass',
      answers: [
        {
          text: 'Предпочитаю быть в гуще событий и брать иннициативу!',
          param: 'fighter',
          nextStep: 1,
        },
        {
          text: 'Сохранять безопасное расстояние, создавая заклинания!',
          param: 'mage',
          nextStep: 5,
        },
      ],
    },
    {
      id: 1,
      question: 'Между тяжелым оружием и легким кинжалом я выберу...',
      style: 'PersonClass',
      answers: [
        { text: 'Тяежлое! И брони побольше!', param: 'fighter', nextStep: 2 },
        { text: 'Легкий кинжал - лучший способ устранения врага!', param: 'assassin', nextStep: 9 },
      ],
    },
    {
      id: 2,
      question: 'В нашей команде я предпочитаю выступать в роли стрелка',
      style: 'PersonClass',
      answers: [
        { text: 'Нет', param: 'fighter', nextStep: 3 },
        { text: 'Да', param: 'marksman', nextStep: 12 },
      ],
    },
    {
      id: 3,
      question: 'Оказавшись в бою, ты станешь...',
      style: 'PersonClass',
      answers: [
        { text: 'Наносить урон, помогая команде победить!', param: 'fighter', nextStep: 4 },
        { text: 'Принимать урон, защищая команду от врагов!', param: 'tank', nextStep: 14 },
      ],
    },
    {
      id: 4,
      question: 'Перед началом боя ты думаешь о...',
      style: 'PersonClass',
      answers: [
        { text: 'Том, какую цель выбрать первой!', param: 'fighter', nextStep: 15 },
        { text: 'HP и мане команды, уже готовясь им помогать!', param: 'support', nextStep: 14 },
      ],
    },
    {
      id: 5,
      question: 'Между магическим шаром и Кунаем я выберу...',
      style: 'PersonClass',
      answers: [
        { text: 'Шар. Заклинания - это весело.', param: 'mage', nextStep: 6 },
        { text: 'Кунай. Тихое и быстрое убийство.', param: 'assassin', nextStep: 9 },
      ],
    },
    {
      id: 6,
      question: 'Мне больше по душе...',
      style: 'PersonClass',
      answers: [
        {
          text: 'С самого начала играть самостоятельно, иногда взаимодействуя с командой',
          param: 'mage',
          nextStep: 7,
        },
        {
          text: 'Начинать игру с персонажем поддержки, на которого можно положиться!',
          param: 'marksman',
          nextStep: 12,
        },
      ],
    },
    {
      id: 7,
      question: 'Будучи в бою, я...',
      style: 'PersonClass',
      answers: [
        { text: 'Предпочитаю стоять позади, помогая команде уроном!', param: 'mage', nextStep: 8 },
        { text: 'Лечу перед всех, защищая команду от урона врагов!', param: 'tank', nextStep: 14 },
      ],
    },
    {
      id: 8,
      question: 'Моя магия направлена в сторону...',
      style: 'PersonClass',
      answers: [
        { text: 'Урона', param: 'mage', nextStep: 16 },
        { text: 'Исценелия и усиления', param: 'support', nextStep: 14 },
      ],
    },
    {
      id: 9,
      question: 'Побждать врага приятнее...',
      style: 'PersonClass',
      answers: [
        { text: 'Самостоятельно, без лишних глаз', param: 'assassin', nextStep: 10 },
        { text: 'Вместе с товарищем, разделяя славу', param: 'marksman', nextStep: 12 },
      ],
    },
    {
      id: 10,
      question: 'Выбирая между тяжелым танком и легким убийцей, я...',
      style: 'PersonClass',
      answers: [
        { text: 'Убийца', param: 'assassin', nextStep: 11 },
        { text: 'Танк', param: 'tank', nextStep: 14 },
      ],
    },
    {
      id: 11,
      question: 'Какой класс вам ближе всего?',
      style: 'PersonClass',
      answers: [
        { text: 'Истребитель', param: 'assassin', nextStep: 17 },
        { text: 'Поддержка', param: 'support', nextStep: 14 },
      ],
    },
    {
      id: 12,
      question: 'Я предпочитаю быть...',
      style: 'PersonClass',
      answers: [
        {
          text: 'Стрелком, расстреливающим большие и неповоротливые цели!',
          param: 'marksman',
          nextStep: 13,
        },
        { text: 'Большим воином, всегда готовым идти в бой!', param: 'tank', nextStep: 14 },
      ],
    },
    {
      id: 13,
      question: 'Играя с другом, я...',
      style: 'PersonClass',
      answers: [
        {
          text: 'Хочу совершать все убийства и доминировать в игре!',
          param: 'marksman',
          nextStep: 20,
        },
        {
          text: 'Хочу спасать товарищей, накладывая щиты и усиления!',
          param: 'support',
          nextStep: 14,
        },
      ],
    },
    {
      id: 14,
      question:
        'Между неповоротливым, но живучим танком и легкой, но хрупкой поддержкой я выберу...',
      style: 'PersonClass',
      answers: [
        { text: 'Танка', param: 'tank', nextStep: 18 },
        { text: 'Поддержку', param: 'support', nextStep: 19 },
      ],
    },

    {
      id: 15,
      style: 'classType',
      question: 'Будучи воином, ты бы хотел быть...',
      answers: [
        {
          text: 'Воином, который накапливает силы и усиляется постепенно!',
          param: 'JuggernautWarrior',
          nextStep: 20,
        },
        {
          text: 'Воином, который всегда готов драться, даже с самых первых минут!',
          param: 'DiverWarrior',
          nextStep: 20,
        },
      ],
    },
    {
      id: 16,
      style: 'classType',
      question: 'Будучи магом, ты бы хотел быть...',
      answers: [
        { text: 'Магом с арсеналом разноцветных фаерболов!', param: 'BattleMage', nextStep: 20 },
        { text: 'Магом, сохраняющим безопасную дистанцию и силу.', param: 'ArtMage', nextStep: 20 },
        { text: 'Магом, который буквально "взрывает" врага!', param: 'BoomMage', nextStep: 20 },
      ],
    },
    {
      id: 17,
      style: 'classType',
      question: 'Будучи истребителем, ты бы хотел быть...',
      answers: [
        {
          text: 'Мобильным истребителем, голодным до разных убийств!',
          param: 'MoveAssassin',
          nextStep: 20,
        },
        {
          text: 'Истребителем - дуэлянтом, выбирающим визави!',
          param: 'DuelAssassin',
          nextStep: 20,
        },
      ],
    },
    {
      id: 18,
      style: 'classType',
      question: 'Будучи танком, ты бы хотел быть...',
      answers: [
        {
          text: 'Танком, который рвется в бой, готовый раскидывать врагов',
          param: 'DiverTank',
          nextStep: 20,
        },
        {
          text: 'Танком, который играет аккуратно, думая о команде',
          param: 'DeffTank',
          nextStep: 20,
        },
      ],
    },
    {
      id: 19,
      style: 'classType',
      question: 'Будучи игроком поддержки, ты бы хотел быть...',
      answers: [
        {
          text: 'Поддержкой, которая оказываает давление на соперников!',
          param: 'ControlSupport',
          nextStep: 20,
        },
        {
          text: 'Поддержкой, которая всячески помогает союзникам!',
          param: 'BuffSupport',
          nextStep: 20,
        },
      ],
    },
    {
      id: 20,
      style: 'aggressive',
      question: 'Твой стиль игры можно назвать агрессивным?',
      answers: [
        { text: 'Да! Нужно больше убийств!', param: 'aggressive', nextStep: 21 },
        { text: 'Я предпочитаю играть размеренно.', param: 'normal', nextStep: 21 },
        { text: 'Я играю аккуратно.', param: 'passive', nextStep: 21 },
      ],
    },
    {
      id: 21,
      style: 'difficulty',
      question: 'Чем сложнее будет персонаж, тем интереснее на нем играть?',
      answers: [
        { text: 'Нет, мне нужны легкие герои!', param: ['0', '1', '2', '3'], nextStep: 22 },
        { text: 'Всего должно быть в меру.', param: ['4', '5', '6', '7'], nextStep: 22 },
        { text: 'Разумеется!', param: ['8', '9', '10'], nextStep: 22 },
      ],
    },
  ],
  answers2: {
    PersonClass: null,
    classType: null,
    aggressive: null,
    difficulty: null,
  },
};

const AnswerSlice = createSlice({
  name: 'Answer',
  initialState,
  reducers: {
    addAnswer2: (state, action: PayloadAction<IActionAnswer2>) => {
      const newAnswers2 = {
        ...state.answers2,
        [action.payload.param]: action.payload.answer,
      };

      state.answers2 = newAnswers2;
    },
    removeAnswers: (state) => {
      state.answers2 = {};
    },
  },
});

export const { addAnswer2, removeAnswers } = AnswerSlice.actions;
export default AnswerSlice.reducer;
