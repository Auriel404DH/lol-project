export type questionAnswersType =
  | {
      id: number;
      text: string;
      param: boolean;
    }
  | {
      id: number;
      text: string;
      param: string;
    };
