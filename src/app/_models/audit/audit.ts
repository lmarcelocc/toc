import {
  ICompany
} from '../_shared';

export interface IAction {
  id: number;
  company_id: string;
  company: ICompany;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}
