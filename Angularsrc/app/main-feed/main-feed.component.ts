import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.css']
})
export class MainFeedComponent implements OnInit {

  title = 'The Feed';
 
  // Object to save the response returned from the service.
  
  myresponseUsers: any;
 
  // Url to fetch the employee records from the spring application.
 
  // Method to fetch all employees from the database table.
  // getAllEmployees() {
  //   this._http.get(this.APP_URL + '/getemployees.app').subscribe(
  //     data => {
  //       this.myresponse = data;
  //     },
  //     error => {
  //       console.log('Error occured', error);
  //     }
  //   );
  // }

  // getAllFood() {
  //   this._http.get(this.APP_URL + '/getAllFood.app').subscribe(
  //     data => {
  //       this.myresponse2 = data;
  //       console.log("hi");
  //     },
  //     error => {
  //       console.log('Error occured', error);
  //     }
  //   );
  // }

  // getAllPosts() {
  //   this._http.get(this.APP_URL + '/getAllPosts.app').subscribe(
  //     data => {
  //       this.myresponsePosts = data;
  //       console.log(this.myresponsePosts);
        
  //     },
  //     error => {
  //       console.log('Error occured', error);
  //     }
  //   );
  // }

  // getAllComments() {
  //   console.log("hi comments");
  //   this._http.get(this.APP_URL + '/getAllComments.app').subscribe(
  //     data => {
  //       this.myresponseComments = data;
  //       console.log(this.myresponseComments);
  //     },
  //     error => {
  //       console.log('Error occured', error);
  //     }
  //   );
  // }
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

  }

}
