import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Validators
import { CustomValidators } from 'ng2-validation';

// Models
import { IUser } from '../../_models/index';

// Service
import { AuthenticationService, UserService } from '../../_services/index';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // Form submit button
  public buttonDisabled: boolean = false;

  /**
   * Form group
   */
  public profileForm: FormGroup;
  public first_name: FormControl;
  public last_name: FormControl;
  public email: FormControl;
  public company: FormControl;
  public old_password: FormControl;
  public password: FormControl;
  public password_confirmation: FormControl;

  private user: IUser;

  /**
   * Constructor.
   *
   * @param _authService
   */
  constructor(
    private _authService: AuthenticationService,
    private _userService: UserService
  ) {

    // Get authenticated user
    this.user = this._authService.getAuthenticatedUser();

    this.createFormControls(this.user);
    this.createForm();
  }

  /**
   * On init.
   */
  ngOnInit() {
    console.info('@Profile component!');
  }

  /**
   * Submit form to edit an user.
   */
  public onSubmit() {

    // Disable submit button
    this.buttonDisabled = true;

    // server is expetcing an array
    let data = this.profileForm.value;

    // Make the request
    this._userService.updateProfile(data, this.user.id)
      .subscribe((response) => {

        // Enable submit button
        this.buttonDisabled = false;

      }, (errorResponse) => {

        // Enable submit button
        this.buttonDisabled = false;
        console.log(errorResponse);

      });

  }

  /**
   * Create form controls.
   */
  private createFormControls(user: IUser) {

    // First name
    this.first_name = new FormControl(
      user.first_name,
      [
        Validators.required,
        Validators.minLength(2)
      ]
    );

    // Last name
    this.last_name = new FormControl(
      user.last_name,
      [
        Validators.required,
        Validators.minLength(2)
      ]
    );

    // E-mail
    this.email = new FormControl(
      user.email,
      [
        Validators.required,
        Validators.email
      ]
    );

    // Company
    this.company = new FormControl(
      {
        value: user.company.name,
        disabled: true
      }
    );

    // Company
    this.old_password = new FormControl(
      '',
      [
        Validators.minLength(6)
      ]
    );

    // Password
    this.password = new FormControl(
      '',
      [
        Validators.minLength(6)
      ]
    );

    // Password confirmation : should be equals to password
    this.password_confirmation = new FormControl(
      '',
      [
        CustomValidators.equalTo(this.password)
      ]
    );
  }

  /**
   * Create the user form model.
   */
  private createForm() {

    // Init form
    this.profileForm = new FormGroup({
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      company: this.company,
      old_password: this.old_password,
      password: this.password,
      password_confirmation: this.password_confirmation
    });
  }

}
