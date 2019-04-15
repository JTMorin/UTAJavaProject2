import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  template: `
    <h3>User List</h3>
    <ul class='items'>
    <div *ngFor='let user of myresponseUsers'>
      <li (click)='getUser(user.userId)' >
        <span class='badge'>{{user.userId}}</span> {{user.userName}}
      </li>
      </div>
    </ul>

    <h3 *ngIf='user'>{{user.userName}}</h3>
    <h3 *ngIf='user'>{{user.userId}}</h3>
    <h3 *ngIf='user'>{{user.organization}}</h3>
    <h3 *ngIf='user'>{{user.firstName}}</h3>
    <h3 *ngIf='user'>{{user.lastName}}</h3>
    <h3 *ngIf='user'><img src='{{user.picture}}'></h3>
  `,
  styles: []
})
export class UserListComponent implements OnInit {
  myresponseUsers: any;
  user: any;

  readonly APP_URL = 'http://localhost:9005/Springmvcangular';

  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this._http.get(this.APP_URL + '/getAllUsers.app').subscribe(
      data => {
        this.myresponseUsers = data;
        console.log(this.myresponseUsers);
      },
      error => {
        console.log('Error occured', error);
      }
    );
  }

  getUser(id: any) {
    this._http.get(this.APP_URL + `/${id}/getUser.app`).subscribe(
      data => {
        this.user = data;
        console.log(this.user);
      },
      error => {
        console.log('Error occured', error);
      }
    );
  }
}
