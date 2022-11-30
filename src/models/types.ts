export type QuestionAnswers = {
  text: string;
  param: boolean | string;
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
