import { createSlice } from '@reduxjs/toolkit';
import { Gwen, Senna, Lucian, Black } from '../../assets/characters';

type sentence = {
  name: string;
  image: string;
  isLeft: boolean;
  bg: string;
  id: number;
  text: string;
};

type initialstate = {
  sentences: sentence[];
};

const initialState: initialstate = {
  sentences: [
    {
      name: 'Сенна',
      image: Senna,
      isLeft: true,
      bg: 'ViegoFall',
      id: 0,
      text: ' - Думаешь, это хорошая идея?',
    },
    {
      name: 'Люциан (Перебивая)',
      image: Lucian,
      isLeft: false,
      bg: 'ViegoFall',
      id: 1,
      text: ' - Определённо плохая! Вы забыли, чем всё обернулось в прошлый раз!?',
    },
    {
      name: 'Гвен',
      image: Gwen,
      isLeft: true,
      bg: 'ViegoFall',
      id: 2,
      text: ' - Мне тоже тревожно, но попробовать стоит. В нём определено сохранилось что-то хорошее, нужно просто это пробудить! В этот раз всё будет иначе!',
    },
    {
      name: 'Люциан',
      image: Lucian,
      isLeft: false,
      bg: 'ViegoFall',
      id: 3,
      text: ' - Ни чем хорошим это не закончится...',
    },
    {
      name: 'Гвен',
      image: Gwen,
      isLeft: true,
      bg: 'ViegoFall',
      id: 4,
      text: ' - Да ладно тебе, Люциан. Его ненависть - это недостаток любви. Ему очень больно. Мы должны попробовать!',
    },
    {
      name: 'Сенна',
      image: Senna,
      isLeft: true,
      bg: 'ViegoFall',
      id: 5,
      text: ' - Я могу его понять, Люциан, да и ты тоже. Кому, как не тебе знать тяжесть разлуки?',
    },
    {
      name: 'Люциан',
      image: Lucian,
      isLeft: false,
      bg: 'ViegoFall',
      id: 5,
      text: ' - Но я, в отличие от него, не превратился в чудовище!',
    },
    {
      name: 'Сенна',
      image: Senna,
      isLeft: true,
      bg: 'ViegoFall',
      id: 5,
      text: ' - Да, ты сильнее. Поэтому мы и должны помочь. Такой участи не заслужил никто.',
    },
    {
      name: 'Люциан',
      image: Lucian,
      isLeft: false,
      bg: 'ViegoFall',
      id: 5,
      text: ' - Плохая идея...',
    },
    {
      name: 'Гвен',
      image: Gwen,
      isLeft: true,
      bg: 'ViegoFall',
      id: 5,
      text: ' - Итак, приготовьтесь!',
    },
    {
      name: '...',
      image: Black,
      bg: 'Black',
      isLeft: true,
      id: 5,
      text: '...',
    },
  ],
};

export const storySlice = createSlice({
  name: 'Answer',
  initialState,
  reducers: {},
});

export default storySlice.reducer;
