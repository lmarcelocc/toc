import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthenticationService, UserService } from '../../_services/index';

// Validators
import { CustomValidators } from 'ng2-validation';

@Component({
    selector: 'app-register',
    styleUrls: ['./register.component.css'],
    templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit {

    public title = 'Register';

    public registerUserForm: FormGroup; // <--- userForm is of type FormGroup
    public first_name: FormControl;
    public last_name: FormControl;
    public email: FormControl;
    public company: FormControl;
    public password: FormControl;
    public password_confirmation: FormControl;

    /**
     * Boolean used in telling the UI
     * that the form has been submitted
     * and is awaiting a response
     */
    public submitted = false;

    /**
     * Constructor.
     */
    constructor(
        private router: Router,
        private userService: UserService,
    ) { }

    /**
     *
     */
    ngOnInit() {

         // Create form with field rules
         this.createFormControls();
         this.createForm();

    }

   /**
    * Create form controls.
    */
    createFormControls() {

        // First name
        this.first_name = new FormControl(
            '',
            [
                Validators.required,
                Validators.minLength(2)
            ]
        );

        // Last name
        this.last_name = new FormControl(
            '',
            [
                Validators.required,
                Validators.minLength(2)
            ]
        );

        // E-mail
        this.email = new FormControl(
            '',
            [
                Validators.required,
                Validators.email
            ]
        );

        // Company
        this.company = new FormControl(
            '',
            [
                Validators.required,
                Validators.minLength(2)
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

        // Form builder with rules
        this.registerUserForm = new FormGroup({
            email: this.email,
            first_name: this.first_name,
            last_name: this.last_name,
            company: this.company,
            password: this.password,
            password_confirmation: this.password_confirmation
        });
    }

    /**
     * On register form submit.
     */
    onSubmit() {
        // Disable button
        this.submitted = true;

        // Make the request.
        // If all fine let's redirect the user to root page.
        // If some error, we will show the server message error to user and
        // enable the submit button again.
        this.userService.registerUser(
            this.registerUserForm.value
        )
        .subscribe(data => {
            this.router.navigate(['/']);
        },
        error => {
            this.submitted = false;
        });

    }
}