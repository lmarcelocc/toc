import {
  ILegalBase
} from '../legal-base';

import {
  IAnswer
} from './index';

export interface IAction {
  id: number;
  action: string;
  legal_basis_id: number;
  legal_basis?: ILegalBase;
  answers?: IAnswer;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}
