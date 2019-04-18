import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-general-feed',
  templateUrl: './general-feed.component.html',
  styleUrls: ['./general-feed.component.css']
})
export class GeneralFeedComponent implements OnInit {

  title = 'Your Feed';
 
  myresponseUsers: any;
 
  readonly APP_URL = 'http://localhost:9005/Springmvcangular';
 
  constructor(private _http: HttpClient) { }

  getAllUsers() {
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


  ngOnInit(){
      this.getAllUsers(); 
  }

}