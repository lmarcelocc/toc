import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Sort, PageEvent } from '@angular/material';

import { ICompany } from '../_models/_shared';

@Injectable()
export class CompanyService {

    constructor(
        private http: HttpClient
    ) {
    }


    /**
     * Create an item.
     */
    create(company: ICompany): Observable<any> {

      return this.http
        .post('admin/companies', company);

    }

    /**
     * Get all items from server.
     */
    getAll(): Observable<any> {

        return this.http.get('admin/companies');

    }

    /**
     * Update an item.
     */
    update(company: ICompany, companyId: string): Observable<any> {

        let url = 'admin/companies/' + companyId;

        return this.http.put(url, company);

    }

    /**
     * Delete an item from the server.
     */
    delete(company: ICompany): Observable<any> {

        return this.http.delete('admin/companies/' + company.id);

    }

    /**
     * Search items.
     */
    searchAndFilter(term: string, sort: Sort, paginator: PageEvent): Observable<any> {

        // Handle with parameters
        let _params = new HttpParams();

        // Relations that we want to receive
        // _params = _params.set('with[]', 'roles').append('with[]', 'company');

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

        return this.http.get('admin/companies', {
          params: _params
        });
    }
}
