import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Sort, PageEvent } from '@angular/material';

import { IUser } from '../_models/user';
import { IRole } from '../_models/user';

@Injectable()
export class UserService {

    constructor(
        private http: HttpClient
    ) {
    }


    /**
     * Create a user.
     */
    create(user: IUser): Observable<any> {

      return this.http
        .post('admin/users', user);

    }

    /**
     * Get users from server.
     */
    getUsers(): Observable<any> {

        return this.http.get('admin/users');

    }

    /**
     * Update an user.
     */
    updateUser(user: IUser, userId: string): Observable<any> {

        let url = 'admin/users/' + userId;

        return this.http.put(url, user);

    }

    /**
     * Delete a user from the server.
     */
    delete(user: IUser): Observable<any> {

        return this.http.delete('admin/users/' + user.id);

    }

    /**
     * Search users by their username.
     */
    searchAndFilter(term: string, sort: Sort, paginator: PageEvent): Observable<any> {

        // Handle with parameters
        let _params = new HttpParams();

        // Relations that we want to receive
        _params = _params.set('with[]', 'roles').append('with[]', 'company');

        // If we have search term.
        if (term) {
            _params = _params.set('search', term);
        }

        // If is to sort.
        if (sort) {
            _params = _params.set(sort.active, sort.direction);
        }

        // If we ned to paginate
        if (paginator) {
            _params = _params.set('page', String(paginator.pageIndex + 1));
            _params = _params.set('size', String(paginator.pageSize));
        }

        return this.http.get('admin/users', {
          params: _params
        });
    }

    /**
     * Search users on LDAP.
     */
    searchLdapUsers(usernamePrefix: string) {

        // Handle with parameters
        let _params = new HttpParams();

        // If we have search term.
        if (usernamePrefix) {
            _params = _params.append('prefix', usernamePrefix);
        }

        return this.http.get('um/ldap', {
          params: _params
        });

    }

    /**
     * activate a user
     */
    enableDisableUser(userId: string, status: number): Observable<any> {

        const active = {active: status};

        let url = 'admin/users/' + userId;

        return this.http.put(url, active);

    }

    /**
     * Register an user.
     *
     * @param user IUser
     */
    registerUser(user: IUser): Observable<any> {

        return this.http
            .post('auth/register', user);
    }

    /**
     * Delet user account.
     *
     * @param userId IUser
     */
    public deleteOwnUser(userId: string): Observable<any> {

        return this.http.delete('user/profile/' + userId);
    }

    /**
     * Update user profile.
     *
     * @param user IUser
     * @param userId string
     */
    updateProfile(user: IUser, userId: string): Observable<any> {

        let url = 'profile/' + userId;

        return this.http.put(url, user);
    }
}
