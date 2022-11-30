export type QuestionAnswers = {
  text: string;
  param: string | string[];
  nextStep: number;
}[];

export type ICharactersParams = {
  PersonClass: string;
  classType: string;
  aggressive: string;
  difficulty: string;
};

export interface ICharacters {
  avatar: string;
  name: string;
  nickname: string;
  discription: string;
  params: ICharactersParams;
}
