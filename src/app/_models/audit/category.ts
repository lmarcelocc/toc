import { IQuestion } from '../../_models/audit';

export interface ICategory {
  id: number;
  category_id: number;
  name: string;
  sub_categories: ICategory[];
  parent_category: ICategory;
  questions?: IQuestion[];
  created_at: string;
  updated_at: string;
  deleted_at: string;
}
