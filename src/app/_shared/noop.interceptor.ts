import { Injectable, Injector } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse
} from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services';
import { API } from '../config/env';
import { ROUTES_NO_MESSAGE } from '../config/routes.no-message';

@Injectable()
export class NoopInterceptor implements HttpInterceptor {

  constructor(
    private injector: Injector,
    private router: Router,
    public snackBar: MatSnackBar
  ) { }

  /**
   * Check if we should show or not the server message to the user.
   */
  shouldShowServerMessage(req) {

    let _uri = req.url;
    let _method = req.method;

    // Check if URI exists on the file listed with uri's to not shown server messages.
    for (let checked of ROUTES_NO_MESSAGE) {

        // If both conditions are true, let's hide the message to the user.
        if (checked.URI === _uri && checked.METHOD.indexOf(_method) > -1) {
            return false;
        }
    }

    // Return true - Show the message to the user
    return true;
  }

  /**
   * Overwrite method.
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Update all reqeust with server url
    let url = API.URL;

    // Get current user from local storage to add always the Authorization token
    // if exists.
    let token = localStorage.getItem('token');

    // Clone and add token to headers if token exists.
    let _headers = req.headers;

    _headers = req.headers.append('Content-Type', 'application/json');

    if (token) {
        _headers = req.headers.append('Authorization', 'Bearer ' + token);
    }

    const changedReq = req.clone({
      url: url + req.url,
      headers: _headers
    });

    return next.handle(changedReq)
        .do((event) => {
            if (event instanceof HttpResponse) {

                if (event.body.message && this.shouldShowServerMessage(req)) {

                }
            }
        })
        .catch((res) => {

            if (res.status === 401 && req.url !== 'auth/login') {
                let authenticationService = this.injector.get(AuthenticationService);

                return authenticationService.refreshToken().flatMap((data: any) => {

                    // Update local storage
                    if (data.access_token !== '') {
                        localStorage.setItem('token', data.access_token);
                    } else {
                        // Otherwise, remove user local storage and sent him to login page
                        localStorage.removeItem('currentUser');
                        localStorage.removeItem('token');
                        this.router.navigate(['./login']);
                        return Observable.throw(res);
                    }

                    let clonedRequestRepeat = req.clone({
                        headers: req.headers.set(
                            'Authorization', 'Bearer ' + localStorage.getItem('token')
                        ),
                        url: url + req.url
                    });

                    return next.handle(clonedRequestRepeat).do((event) => {
                        if (event instanceof HttpResponse) {
//                            console.log(event);
                        }
                    });
                })
            } else if (res.status === 403) {

                // Show user a message
                this.snackBar.open('You don\'t have permissions to access this resource.', 'OK', {
                    duration: 4000
                });

                return Observable.throw(res);

            } else if (res.status === 404) {


                return Observable.throw(res);

            } else {

                // Could be a string with an error message or a array.
                let errors = res.error.errors ? res.error.errors : res.error.message;

                if (!errors && res.message) {
                    errors = res.message;
                }

                if (!errors) {
                    errors = 'We\'re really sorry. Some error ocurred on your request.';
                }


                return Observable.throw(res);
            }

        });

  }
}
