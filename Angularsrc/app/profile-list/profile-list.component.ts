import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  myresponseUsers: any;
  user: any;

  readonly APP_URL = 'http://localhost:9005/Springmvcangular';

  constructor(private _http: HttpClient, private router: Router) { }

  ngOnInit() {
    this._http.get(this.APP_URL + '/getAllUsers.app').subscribe(
      data => {
        this.myresponseUsers = data;
      },
      error => {
        console.log('Error occured', error);
      }
    );
  }

  onSelect(id) {
    //console.log(id);
    location.assign('/feed/'+ id);
  }

}
