import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Import menu component
import { MenuListComponent } from '../../sidenav/menu-list/index';

// Services
import { AuthenticationService, UserService } from '../../_services/index';

@Component({
  selector: 'app-login',
  styleUrls: [ './login.component.css' ],
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

    public model: any = {};
    public loading = false;
    public error = '';
    public title = 'Login';
    public form: FormGroup;

    /**
     * Boolean used in telling the UI
     * that the form has been submitted
     * and is awaiting a response
     */
   public submitted = false;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private userService: UserService,
        private authService: AuthenticationService,
    ) {}

    /**
     * on Init.
     */
    ngOnInit() {

        // Reset login status
        this.authService.logout();

        this.form = this.formBuilder.group({
            email: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.email
                ])
            ],
            password: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(32)
                ])
            ]
        });
    }

    /**
     * When we submit login form.
     */
    public onSubmit() {

        this.submitted = true;

        this.authService.login(
            this.form.value.email,
            this.form.value.password)
        .subscribe((data) => {

            // Call next to Menu list component subscriber to update the menu list.
            MenuListComponent.updateMenu.next(true);

            // Redirecto to home page
            this.router.navigate(['/']);
        },
        (error) => {
            console.log(error);
            this.submitted = false;
        });

  }
}