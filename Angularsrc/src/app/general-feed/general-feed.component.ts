import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-general-feed',
  templateUrl: './general-feed.component.html',
  styleUrls: ['./general-feed.component.css']
})
export class GeneralFeedComponent implements OnInit {

  title = 'The Feed';
 
  // Object to save the response returned from the service.
  // myresponse: any;
  // myresponse2: any;
  // myresponsePosts: any;
  // myresponseComments: any;
  myresponseUsers: any;
 
  // Url to fetch the employee records from the spring application.
  readonly APP_URL = 'http://localhost:9005/Springmvcangular';
 
  constructor(private _http: HttpClient) { }
 
  // Method to fetch all employees from the database table.
  
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

  }
}