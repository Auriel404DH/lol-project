export type QuestionAnswers =
  | {
      text: string;
      param: boolean;
      nextStep: number;
    }[]
  | {
      text: string;
      param: string;
      nextStep: number;
    }[];

export type ICharactersParams = {
  Agressive: boolean;
  PersonClass: string;
};

export interface ICharacters {
  avatar: string;
  name: string;
  nickname: string;
  discription: string;
  params: ICharactersParams;
}
