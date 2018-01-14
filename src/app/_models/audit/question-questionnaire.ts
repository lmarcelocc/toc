import {
  IQuestion
} from './index';

export interface IQuestionQuestionnaire {
  question_id: number;
  questionnaire_id: number;
  question_active: number;
  created_at: string;
  updated_at: string;
  question: IQuestion;
}
