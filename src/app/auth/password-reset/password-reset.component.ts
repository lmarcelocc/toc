import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

// Services
import { AuthenticationService, UserService } from '../../_services/index';

import 'rxjs/add/operator/switchMap';

// Validators
import { CustomValidators } from 'ng2-validation';
@Component({
  selector: 'password-reset',
  styleUrls: [ './password-reset.component.css' ],
  templateUrl: './password-reset.component.html'
})

export class PasswordResetComponent implements OnInit {

    /**
     * Used to know if user is on the first step (inserting his e-mail to receive
     * an e-mail with a link to reset his password) of if it's on the last step where
     * he should choose his new password.
     *
     * Could be e-mail or reset
     */
    private formType: string = 'email';

    // Form where we ask for user e-mail
    public resetPasswordEmailForm: FormGroup;

    // Form where we ask for user new password.
    // We ask again for the e-mail and we will have a hidden input with a token (PARAM).
    public resetPasswordForm: FormGroup;
    public email: FormControl;
    public token: FormControl;
    public password: FormControl;
    public password_confirmation: FormControl;

    private _tokenParam: string;

    /**
     * Boolean used in telling the UI
     * that the form has been submitted
     * and is awaiting a response
     */
    public submitted = false;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService,
        private authService: AuthenticationService,
    ) { }

    /**
     *
     */
    ngOnInit() {

        // If we have a token on the url parameter, means we are on step 2.
        // So, save the token.
        if (this.route.snapshot.params.token) {
            this._tokenParam = this.route.snapshot.params.token;
            this.formType = 'reset';
        }

        // Create form with field rules
        this.createFormControls();
        this.createForm();

    }


    /**
     * Create form controls.
     */
    createFormControls() {

        // E-mail - used for step 1 and step 2.
        this.email = new FormControl(
            '',
            [
                Validators.required,
                Validators.email
            ]
        );

        // We only proceed if we are on step 2.
        // Step 1 only needs e-mail input.
        if (this.formType !== 'reset') {
            return;
        }

        // Token
        this.token = new FormControl(
            this._tokenParam,
            [
                Validators.required,
                Validators.minLength(64),
                Validators.maxLength(64),
            ]
        );

        // Password
        this.password = new FormControl(
            '',
            [
                Validators.required,
                Validators.minLength(6)
            ]
        );

        // Password confirmation : should be equals to password
        this.password_confirmation = new FormControl(
            '',
            [
                Validators.required,
                CustomValidators.equalTo(this.password)
            ]
        );
    }

    /**
     * Create the user form model.
     */
    createForm() {

        // We only proceed if we are on step 2.
        // Step 1 only needs e-mail input.
        if (this.formType === 'email') {
            // Form builder with rules
            this.resetPasswordEmailForm = new FormGroup({
                email: this.email
            });
        }

        // We only proceed if we are on step 2.
        // Step 1 only needs e-mail input.
        if (this.formType !== 'reset') {
            return;
        }

        // Form for step 2 - form builder with rules
        this.resetPasswordForm = new FormGroup({
            email: this.email,
            token: this.token,
            password: this.password,
            password_confirmation: this.password_confirmation
        });
    }


    /**
     * When we submit the reset password form with e-mail.
     * User should receive an e-mail with a link to reset
     * is password (go to step 2 of this view).
     */
    onSubmitGetResetEmail() {

        this.submitted = true;

        this.authService.passwordResetEmail(
            this.resetPasswordEmailForm.value
        ).subscribe(data => {
            console.log(data);
            this.router.navigate(['/']);
        },
        error => {
            this.submitted = false;
        });
    }

    /**
     * When we submit the reset password form with e-mail.
     */
    onSubmitResetPassword() {

        this.submitted = true;

        this.authService.passwordReset(
            this.resetPasswordForm.value
        ).subscribe(data => {
            console.log(data);
          this.router.navigate(['/login']);
        },
        error => {
            this.submitted = false;
        });

  }


}