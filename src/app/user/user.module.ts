import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// @https://github.com/angular/flex-layout
import { FlexLayoutModule } from '@angular/flex-layout';

// Custom stuff
import { UserComponent } from './user.component';
import { ProfileComponent } from './profile/profile.component';

// User routes
import { userRoutes } from './user-routing.module';

// Import meterial design components
import {
  MatFormFieldModule,
  MatIconModule,
  MatSidenavModule,
  MatButtonModule,
  MatToolbarModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatSlideToggleModule,
  MatTableModule,
  MatPaginatorModule,
  MatDialogModule,
  MatOptionModule,
  MatSelectModule,
  MatRadioModule,
  MatSortModule,
  MatAutocompleteModule,
  MatMenuModule,
  MatSnackBarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes),
    FlexLayoutModule,
    MatFormFieldModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    MatSortModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatSnackBarModule,
  ],
  declarations: [
    UserComponent,
    ProfileComponent
  ]
})
export class UserModule { }
