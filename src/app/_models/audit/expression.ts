import { IDefinition } from 'src/app/_models/audit';

export interface IExpression {
  id: number;
  expression: string;
  definition: IDefinition;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}
