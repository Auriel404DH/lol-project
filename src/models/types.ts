export type QuestionAnswers = (
  | {
      text: string;
      param: boolean;
    }
  | {
      text: string;
      param: string;
    }
)[];

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
