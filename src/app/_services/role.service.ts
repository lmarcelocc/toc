import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

import { IRole } from '../_models/user';

@Injectable()
export class RoleService {

    constructor(
        private http: HttpClient
    ) {
    }

    /**
     * Get users from server.
     */
    geRoles(): Observable<any> {

        return this.http.get('admin/roles');

    }

}
