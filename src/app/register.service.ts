import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  _url = 'http://localhost:9005/Springmvcangular';

  constructor(private _http: HttpClient) { }

  enroll(user: User) {
    console.log(user);
    return this._http.post<any>(this._url + '/insertUser.app', user);
    console.log(this._http.post<any>(this._url + '/insertUser.app', user));
  }

  // getAllUsers() {
  //   this._http.get(this.APP_URL + '/getAllUsers.app').subscribe(
  //     data => {
  //       this.myresponseUsers = data;
  //       console.log(this.myresponseUsers);
  //     },
  //     error => {
  //       console.log('Error occured', error);
  //     }
  //   );
  // }
}
