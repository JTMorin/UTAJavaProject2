import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
 
import { AppComponent } from './app.component';
import { MainFeedComponent } from './main-feed/main-feed.component';
import { DataService } from './data.service';
import { InputFormComponent } from './input-form/input-form.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FilterPipe} from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProfilePageComponent } from './profile-page/profile-page.component';
 
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    UserProfileComponent,
    UserListComponent,
    RegisterComponent,
    NavbarComponent,
    ForgotPasswordComponent,
    LoginComponent,
    ProfileListComponent,
    SidebarComponent,
    FilterPipe,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
