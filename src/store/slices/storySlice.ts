import { createSlice } from '@reduxjs/toolkit';
import { Gwen, Senna, Lucian, Black, Viego, allNG } from '../../assets/characters';

type sentence = {
  name: string;
  secondName?: string;
  image: string;
  secondImage?: string;
  position: string;
  secondPosition?: string;
  bg: string;
  id: number;
  text: string;
  secondText?: string;
};

type initialstate = {
  sentences: sentence[];
};

const initialState: initialstate = {
  sentences: [
    {
      name: 'Сенна',
      image: Senna,
      position: 'left',
      bg: 'ViegoFall',
      id: 0,
      text: ' - Думаешь, это хорошая идея?',
    },
    {
      name: 'Люциан (Перебивая)',
      image: Lucian,
      position: 'right',
      bg: 'ViegoFall',
      id: 1,
      text: ' - Определённо плохая! Вы забыли, чем всё обернулось в прошлый раз!?',
    },
    {
      name: 'Гвен',
      image: Gwen,
      position: 'left',
      bg: 'ViegoFall',
      id: 2,
      text: ' - Мне тоже тревожно, но попробовать стоит. В нём определено сохранилось что-то хорошее, нужно просто это пробудить! В этот раз всё будет иначе!',
    },
    {
      name: 'Люциан',
      image: Lucian,
      position: 'right',
      bg: 'ViegoFall',
      id: 3,
      text: ' - Ни чем хорошим это не закончится...',
    },
    {
      name: 'Гвен',
      image: Gwen,
      position: 'left',
      bg: 'ViegoFall',
      id: 4,
      text: ' - Да ладно тебе, Люциан. Его ненависть - это недостаток любви. Ему очень больно. Мы должны попробовать!',
    },
    {
      name: 'Сенна',
      image: Senna,
      position: 'left',
      bg: 'ViegoFall',
      id: 5,
      text: ' - Я могу его понять, Люциан, да и ты тоже. Кому, как не тебе знать тяжесть разлуки?',
    },
    {
      name: 'Люциан',
      image: Lucian,
      position: 'right',
      bg: 'ViegoFall',
      id: 5,
      text: ' - Но я, в отличие от него, не превратился в чудовище!',
    },
    {
      name: 'Сенна',
      image: Senna,
      position: 'left',
      bg: 'ViegoFall',
      id: 5,
      text: ' - Да, ты сильнее. Поэтому мы и должны помочь. Такой участи не заслужил никто.',
    },
    {
      name: 'Люциан',
      image: Lucian,
      position: 'right',
      bg: 'ViegoFall',
      id: 5,
      text: ' - Плохая идея...',
    },
    {
      name: 'Гвен',
      image: Gwen,
      position: 'left',
      bg: 'ViegoFall',
      id: 5,
      text: ' - Итак, приготовьтесь!',
    },
    {
      name: '...',
      image: Black,
      bg: 'Black',
      position: 'left',
      id: 5,
      text: '...',
    },
    {
      name: '...',
      image: Black,
      bg: 'Black',
      position: 'left',
      id: 5,
      text: 'Перед входной дверью...',
    },
    {
      name: 'Гвен',
      image: Gwen,
      bg: 'winterHome',
      position: 'left',
      id: 5,
      text: ' - Итак, ты готов? Помнишь наш разговор?',
    },
    {
      name: 'Виего',
      image: Viego,
      bg: 'winterHome',
      position: 'right',
      id: 5,
      text: ' - Это издевательство над королём! Туман струится из моей груди не для того, чтобы... ',
    },
    {
      name: 'Гвен',
      image: Gwen,
      bg: 'winterHome',
      position: 'left',
      id: 5,
      text: ' - Тем более, это цена твоего освобождения. Ты всё ещё можешь стать лучше... Ты должен ради неё.',
    },
    {
      name: 'Виего',
      image: Viego,
      bg: 'winterHome',
      position: 'right',
      id: 5,
      text: ' - Я - падший король! Несколько добрых дел не вернут мою любимую к жизни.',
    },
    {
      name: 'Гвен',
      image: Gwen,
      bg: 'winterHome',
      position: 'left',
      id: 5,
      text: ' - Да, но... вспомни её. Изольда бы хотела именно этого! Почти её память деяниями, Виего. Докажи нам всем, что выбор её сердца - лучший выбор.',
    },
    {
      name: 'Виего',
      image: Viego,
      bg: 'winterHome',
      position: 'right',
      id: 5,
      text: ' - Смогу ли я?',
    },
    {
      name: 'Гвен',
      image: Gwen,
      bg: 'winterHome',
      position: 'left',
      id: 5,
      text: ' - Я в тебя верю. Все мы верим в тебя, Виего. Давай!',
    },
    {
      name: 'Виего(Обращаясь к закату)',
      image: Viego,
      bg: 'winterHome',
      position: 'right',
      id: 5,
      text: ' - Любимая, я иду на это ради тебя...',
    },
    {
      name: '...',
      image: Black,
      bg: 'Black',
      position: 'left',
      id: 5,
      text: '...',
    },
    {
      name: 'Гвен',
      image: Gwen,
      bg: 'homeInside',
      position: 'left',
      id: 5,
      text: ' - Добро пожаловать, это новогодний дом Рунтерры! ',
    },
    {
      name: 'Все',
      image: allNG,
      bg: 'homeInside',
      position: 'full',
      id: 5,
      text: '(поворачиваются)',
    },
    {
      name: 'Виего',
      image: Viego,
      bg: 'homeInside',
      position: 'right',
      id: 5,
      text: '(оглядывается)',
    },
    {
      name: 'Все',
      image: allNG,
      bg: 'homeInside',
      position: 'full',
      id: 5,
      text: '(негодуют)',
    },
    {
      name: 'Гвен(шепотом)',
      image: Gwen,
      bg: 'homeInside',
      position: 'left',
      id: 5,
      text: ' - Виего, скажи что-нибудь!',
    },
    {
      name: 'Люциан',
      image: Lucian,
      bg: 'homeInside',
      position: 'right',
      id: 5,
      text: ' - Это плохая идея...',
    },
    {
      name: 'Виего(неуверенно)',
      image: Viego,
      bg: 'homeInside',
      position: 'center',
      id: 5,
      text: ' - Приветствую всех собравшихся под этой крышей!',
    },
    {
      name: 'Виего',
      image: Viego,
      bg: 'homeInside',
      position: 'center',
      id: 5,
      text: ' - Я польщён вашим милосердием и знаю об условии моего освобождения... ',
    },
    {
      name: 'Люциан',
      image: Lucian,
      bg: 'homeInside',
      position: 'right',
      id: 5,
      text: ' - Это не милосердие, а элементарная глупость!',
    },
    {
      name: 'Виего',
      image: Viego,
      bg: 'homeInside',
      position: 'center',
      id: 5,
      text: ' - В прошлый раз я был сражён идеей воскрешения любимой и, будучи жестоким, захватывал одни земли за другими...',
    },
    {
      name: 'Виего(искренне)',
      image: Viego,
      bg: 'homeInside',
      position: 'center',
      id: 5,
      text: ' -  Теперь мои глаза открыты.',
    },
    {
      name: 'Виего',
      image: Viego,
      bg: 'homeInside',
      position: 'center',
      id: 5,
      text: ' - У вас нет причины доверять или понимать меня, но в предверии праздника я постараюсь стать тем, кем бы меня хотела Видеть Изольда и кем когда-то был я сам. ',
    },
    {
      name: 'Виего',
      image: Viego,
      bg: 'homeInside',
      position: 'center',
      id: 5,
      text: ' - Хорошим человеком.',
    },
  ],
};

export const storySlice = createSlice({
  name: 'Answer',
  initialState,
  reducers: {},
});

export default storySlice.reducer;
