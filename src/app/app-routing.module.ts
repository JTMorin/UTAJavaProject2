import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainFeedComponent } from './main-feed/main-feed.component';
import { InputFormComponent } from './input-form/input-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { ResultComponent } from './result/result.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { GeneralFeedComponent } from './general-feed/general-feed.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: GeneralFeedComponent },
  { path: 'feed', component: GeneralFeedComponent },
  { path: 'feed/:id', component: UserProfileComponent},
  { path: 'feed2/:id', component: UserProfileComponent},
  { path: 'users', component: UserListComponent },
  { path: 'reset-password/:id', component: ResetPasswordComponent },
  
  { path: 'result', component: ResultComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'login', component: LoginComponent},
  { path: 'input', component: InputFormComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MainFeedComponent,
                                  InputFormComponent,
                                  PageNotFoundComponent,
                                  UserProfileComponent,
                                  RegisterComponent,
                                  ForgotPasswordComponent,
                                  LoginComponent,
                                  ];
