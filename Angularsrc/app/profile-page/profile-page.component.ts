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
  file: any;

  readonly APP_URL = 'http://localhost:9005/Springmvcangular';

  constructor(private _http: HttpClient, private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this._http.get(this.APP_URL + '/getAllUsers.app').subscribe(
      data => {
        this.myresponseUsers = data;
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

  fileEvent(fileInput: any){
    var files = fileInput.srcElement.files;
    var file = files[0];
    this.file = file;
  }

  uploadfile(fileInput: any) {
    let profPic = document.getElementById("profPic");
   // profPic.src = fileInput;
  }

}

