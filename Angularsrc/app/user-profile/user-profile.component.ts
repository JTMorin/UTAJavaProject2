import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  template: `
    <p>
      user-profile works!
    </p>
  `,
  styles: []
})
export class UserProfileComponent implements OnInit {
  id: any = 1;
  myresponseUsers: any;
  user: any;

  readonly APP_URL = 'http://localhost:9005/Springmvcangular';

  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this.getUser(this.id);
  }

  getUser(id) {
    this._http.get(this.APP_URL + `/${id}/getUsers.app`).subscribe(
      data => {
        this.myresponseUsers = data;
        console.log(this.myresponseUsers);
      },
      error => {
        console.log('Error occured', error);
      }
    );
  }

}
