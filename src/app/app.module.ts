import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NoopInterceptor } from '../app/_shared/noop.interceptor';
import {
  NgModule,
} from '@angular/core';

// @https://github.com/angular/flex-layout
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  Router,
  Routes,
  RouterModule,
  PreloadAllModules
} from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import meterial design components
import {
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
    MatSnackBarModule,
    MatMenuModule,
    MatExpansionModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatTabsModule
} from '@angular/material';

// Services
import {
    SidenavService,
    AuthenticationService,
    UserService
} from './_services/index';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';

// App is our top level component
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard';
import { NoContentComponent } from './no-content';
import { SidenavComponent } from './sidenav';
import { MenuListComponent } from './sidenav/menu-list';
import { LoginComponent } from './auth/login/index';
import { RegisterComponent } from './auth/register/index';
import { PasswordResetComponent } from './auth/password-reset/index';

// Validators
import { CustomFormsModule } from 'ng2-validation';

// Guards
import { AuthGuard, RoleGuard } from './_guards/index';


// Directives
import { EqualToValidator } from './_directives/index';

// Import pipes
import { SlugifyPipe } from './_pipes';

import '../styles/styles.scss';
import '../styles/headings.css';

/**
 *  External libraries
 */
// TOC - table of contents
// @https://github.com/zurfyx/angular-contents
import { ContentsModule } from 'angular-contents';

// Scroll animation
import { NgxPageScrollModule } from 'ngx-page-scroll';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PasswordResetComponent,
    DashboardComponent,
    NoContentComponent,
    SidenavComponent,
    MenuListComponent,
    SlugifyPipe
  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ContentsModule,
    NgxPageScrollModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    MatSortModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatMenuModule,
    MatExpansionModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomFormsModule,
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    })
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NoopInterceptor,
      multi: true,
    },
    ENV_PROVIDERS,
    AuthGuard,
    RoleGuard,
    AuthenticationService,
    UserService,
    SidenavService,
  ],
  entryComponents: [
  ]
})
export class AppModule {}
