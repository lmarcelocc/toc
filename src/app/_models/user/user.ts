import { IRole } from './index';
import { ICompany } from '../_shared';

export interface IUser {
    id: string;
    username: string;
    first_name: string;
    last_name: string;
    password?: string;
    email: string;
    roles: IRole[];
    company?: ICompany; // The company that the user belongs
    companies?: ICompany[]; // Companies that user has access to
}
