import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TestComponent } from './test/test.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { FilterPipe} from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TestComponent,
    ProfileListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
