import {
  IQuestion,
  IAction
} from './index';

export interface IAnswer {
  id: number;
  answer: string;
  question_id: number;
  action_id: number;
  compliance: number;
  question?: IQuestion;
  action?: IAction;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}
