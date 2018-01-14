import {
  ICategory,
  IDefinition,
  IAnswer,
  IExpression
} from './index';

import { IDepartment } from '../_shared';
import { ILegalBase } from '../legal-base';

export interface IQuestion {
  id: number;
  questionnaire_type: string;
  category_id: number;
  legal_basis_id: number;
  department_id: number;
  scorable: number;
  comment?: string;
  question: string;
  tooltip: any;
  category?: ICategory;
  legal_basis?: ILegalBase;
  definitions?: IDefinition[];
  department: IDepartment;
  answers?: IAnswer[];
  answer_eliminate_question?: IQuestion[];
  expressions: IExpression[];
  created_at: string;
  updated_at: string;
  deleted_at: string;
}
