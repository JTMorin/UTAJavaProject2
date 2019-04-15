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

const routes: Routes = [
  { path: '', redirectTo: '/feed', pathMatch: 'full' },
  { path: 'feed', component: MainFeedComponent },
  { path: 'users', component: UserListComponent },
  { path: 'feed/:id', component: UserProfileComponent},
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
