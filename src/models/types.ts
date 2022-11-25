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
  PersonClass: string;
  classType: string;
};

export interface ICharacters {
  avatar: string;
  name: string;
  nickname: string;
  discription: string;
  params: ICharactersParams;
}
