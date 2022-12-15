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
      question: 'Какой класс вам ближе всего?',
      style: 'PersonClass',
      answers: [
        { text: 'Воин ВоинвоинВионвиоацу ацуацуацу ацуацуацпукпкупк упукпкупку пкупкупку пкупкупкупк упуппуаупукпкупку пкупкупку пкупкупкупк упуппуаупукпкупку пкупкупку пкупкупкупк упуппуа', param: 'fighter', nextStep: 1 },
        { text: 'Маг', param: 'mage', nextStep: 5 },
      ],
    },
    {
      id: 1,
      question: 'Какой класс вам ближе всего?',
      style: 'PersonClass',
      answers: [
        { text: 'Воин', param: 'fighter', nextStep: 2 },
        { text: 'Истребитель', param: 'assassin', nextStep: 9 },
      ],
    },
    {
      id: 2,
      question: 'Какой класс вам ближе всего?',
      style: 'PersonClass',
      answers: [
        { text: 'Воин', param: 'fighter', nextStep: 3 },
        { text: 'Стрелок', param: 'marksman', nextStep: 12 },
      ],
    },
    {
      id: 3,
      question: 'Какой класс вам ближе всего?',
      style: 'PersonClass',
      answers: [
        { text: 'Воин', param: 'fighter', nextStep: 4 },
        { text: 'Танк', param: 'tank', nextStep: 14 },
      ],
    },
    {
      id: 4,
      question: 'Какой класс вам ближе всего?',
      style: 'PersonClass',
      answers: [
        { text: 'Воин', param: 'fighter', nextStep: 15 },
        { text: 'Поддержка', param: 'support', nextStep: 14 },
      ],
    },
    {
      id: 5,
      question: 'Какой класс вам ближе всего?',
      style: 'PersonClass',
      answers: [
        { text: 'Маг', param: 'mage', nextStep: 6 },
        { text: 'Истребитель', param: 'assassin', nextStep: 9 },
      ],
    },
    {
      id: 6,
      question: 'Какой класс вам ближе всего?',
      style: 'PersonClass',
      answers: [
        { text: 'Маг', param: 'mage', nextStep: 7 },
        { text: 'Стрелок', param: 'marksman', nextStep: 12 },
      ],
    },
    {
      id: 7,
      question: 'Какой класс вам ближе всего?',
      style: 'PersonClass',
      answers: [
        { text: 'Маг', param: 'mage', nextStep: 8 },
        { text: 'Танк', param: 'tank', nextStep: 14 },
      ],
    },
    {
      id: 8,
      question: 'Какой класс вам ближе всего?',
      style: 'PersonClass',
      answers: [
        { text: 'Маг', param: 'mage', nextStep: 16 },
        { text: 'Поддержка', param: 'support', nextStep: 14 },
      ],
    },
    {
      id: 9,
      question: 'Какой класс вам ближе всего?',
      style: 'PersonClass',
      answers: [
        { text: 'Истребитель', param: 'assassin', nextStep: 10 },
        { text: 'Стрелок', param: 'marksman', nextStep: 12 },
      ],
    },
    {
      id: 10,
      question: 'Какой класс вам ближе всего?',
      style: 'PersonClass',
      answers: [
        { text: 'Истребитель', param: 'assassin', nextStep: 11 },
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
      question: 'Какой класс вам ближе всего?',
      style: 'PersonClass',
      answers: [
        { text: 'Стрелок', param: 'marksman', nextStep: 13 },
        { text: 'Танк', param: 'tank', nextStep: 14 },
      ],
    },
    {
      id: 13,
      question: 'Какой класс вам ближе всего?',
      style: 'PersonClass',
      answers: [
        { text: 'Стрелок', param: 'marksman', nextStep: 20 },
        { text: 'Поддержка', param: 'support', nextStep: 14 },
      ],
    },
    {
      id: 14,
      question: 'Какой класс вам ближе всего?',
      style: 'PersonClass',
      answers: [
        { text: 'Танк', param: 'tank', nextStep: 18 },
        { text: 'Поддержка', param: 'support', nextStep: 19 },
      ],
    },

    {
      id: 15,
      style: 'classType',
      question: 'Каким воином хочешь быть?',
      answers: [
        { text: 'Пассивный воин (джаггернаут)', param: 'JuggernautWarrior', nextStep: 20 },
        { text: 'Агрессивеый воин (инициатор)', param: 'DiverWarrior', nextStep: 20 },
      ],
    },
    {
      id: 16,
      style: 'classType',
      question: 'Каким магом хочешь быть?',
      answers: [
        { text: 'Боевой Маг', param: 'BattleMage', nextStep: 20 },
        { text: 'Артелирист', param: 'ArtMage', nextStep: 20 },
        { text: 'Подрывник', param: 'BoomMage', nextStep: 20 },
      ],
    },
    {
      id: 17,
      style: 'classType',
      question: 'Каким истребителем хочешь быть?',
      answers: [
        { text: 'Подвижный', param: 'MoveAssassin', nextStep: 20 },
        { text: 'Дуэлянт', param: 'DuelAssassin', nextStep: 20 },
      ],
    },
    {
      id: 18,
      style: 'classType',
      question: 'Каким танком хочешь быть?',
      answers: [
        { text: 'врываемый', param: 'DiverTank', nextStep: 20 },
        { text: 'на страже', param: 'DeffTank', nextStep: 20 },
      ],
    },
    {
      id: 19,
      style: 'classType',
      question: 'Каким саппом хочешь быть?',
      answers: [
        { text: 'контроль', param: 'ControlSupport', nextStep: 20 },
        { text: 'бафф', param: 'BuffSupport', nextStep: 20 },
      ],
    },
    {
      id: 20,
      style: 'aggressive',
      question: 'Агришься?',
      answers: [
        { text: 'УбьюНахуйБлять', param: 'aggressive', nextStep: 21 },
        { text: 'Нормальный чел', param: 'normal', nextStep: 21 },
        { text: 'Я Терпила', param: 'passive', nextStep: 21 },
      ],
    },
    {
      id: 21,
      style: 'difficulty',
      question: 'True Hard Player?',
      answers: [
        { text: 'Я новенький', param: ['0', '1', '2', '3'], nextStep: 22 },
        { text: 'Я смешарик', param: ['4', '5', '6', '7'], nextStep: 22 },
        { text: 'Я смерть', param: ['8', '9', '10'], nextStep: 22 },
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
