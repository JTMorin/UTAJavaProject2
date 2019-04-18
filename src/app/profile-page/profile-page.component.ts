import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  myresponseUsers: any;
  user: any;
  id: any;
  storedUser: any = null;

  bool: any = false;

  readonly APP_URL = 'http://localhost:9005/Springmvcangular';

  constructor(private _http: HttpClient, private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {
    this.storedUser = sessionStorage.getItem('username');
    this.id = this.route.snapshot.paramMap.get('id');
    this._http.get(this.APP_URL + '/getAllUsers.app').subscribe(
      data => {
        this.myresponseUsers = data;
        console.log(data);
        for (let i = 0; i < this.myresponseUsers.length; i++) {
          if (this.myresponseUsers[i].userId == this.id) {
            this.user = this.myresponseUsers[i];
          }
        }
      },
      error => {
        console.log('Error occured', error);
      }
    );

  }


  updateInfo(){
    document.getElementById('bgdRightColumn').innerHTML =
`<app-update-profile-page></app-update-profile-page>`

  }
}