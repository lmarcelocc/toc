import {
  IQuestion,
  IQuestionnaireType,
  IQuestionQuestionnaire
} from './index';

import {
  IUser
} from '../index';

export interface IQuestionnaire {
  id: number;
  questionnaire_type_id: number;
  audit_id: number;
  user_id: string;
  question_questionnaire: IQuestionQuestionnaire;
  questionnaire_type: IQuestionnaireType;
  user: IUser;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}
