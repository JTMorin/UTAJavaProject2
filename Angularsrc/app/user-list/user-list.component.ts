import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  template: `
    <h3>User List</h3>
    <ul class='items list-group'>
    <div *ngFor='let user of myresponseUsers'>
      <li class='list-group-item' (click)='onSelect(user.userId)' >
        <span><img class="img-thumbnail mx-auto" style="width: 5%" src={{user.picture}}/></span>
      <span class='badge'>
        {{user.userId}}
        </span> {{user.userName}}
      </li>
      </div>
    </ul>


  `,
  styles: []
})
export class UserListComponent implements OnInit {
  myresponseUsers: any;
  user: any;
  id: any;

  readonly APP_URL = 'http://localhost:9005/Springmvcangular';

  constructor(private _http: HttpClient, private router: Router) { }

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

  onSelect(id) {
    this.router.navigate(['/feed', id]);
  }
}
