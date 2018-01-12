import { Component,Inject, ViewEncapsulation } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'display-message'.
   */
  selector: 'display-message',  // <display-message></display-message>
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: [ './custom-snackbar.component.css' ],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './custom-snackbar.component.html',

  /**
   * To use custom css passed from noop.interceptor.ts file
   */
  encapsulation: ViewEncapsulation.None
})
export class CustomSnackbarComponent {

    public messages: any = [];

    constructor(@Inject(MAT_SNACK_BAR_DATA) public alerts: any) {

        // If message is a string
        if (typeof alerts === 'string') {
            this.messages.push(alerts);
            return;
        }

        // If we have an array with messages
        for (let key in alerts) {
            this.messages.push(alerts[key][0]);
        }
    }
}
