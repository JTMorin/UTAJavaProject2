import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';


@Component({
  selector: 'app-user-profile',
  template: `
    <p>
      user-profile works!
    </p>
    <h3 *ngIf='user'>{{user.userName}}</h3>
    <h3 *ngIf='user'>{{user.userId}}</h3>
    <h3 *ngIf='user && user.organization'>{{user.organization}}; else https://s3.us-east-2.amazonaws.com/project2socialnetworkbucket/placeholder.png</h3>
    <h3 *ngIf='user'>{{user.firstName}}</h3>
    <h3 *ngIf='user'>{{user.lastName}}</h3>
    <h3 *ngIf='user'><img src='{{user.picture}}'></h3>
  `,
  styles: []
})
export class UserProfileComponent implements OnInit {
  id: any;
  myresponseUsers: any;
  user: any;
  sub: any;

  readonly APP_URL = 'http://localhost:9005/Springmvcangular';

  constructor(private _http: HttpClient, private route: ActivatedRoute) { }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    console.log(this.route.params);
    this.getUser(this.id);
  }

  getUser(id) {
    this._http.get(this.APP_URL + `/${id}/getUser.app`).subscribe(
      data => {
        this.user = data;
        //console.log(this.user);
      },
      error => {
        console.log('Error occured', error);
      }
    );
  }

}
