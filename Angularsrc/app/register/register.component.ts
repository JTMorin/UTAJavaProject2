import { Component, OnInit, ElementRef } from '@angular/core';
import { User } from '../user';
import * as $ from 'jquery';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css',
              '../styles/global/common.css',
              '../styles/global/login.css']
})
export class RegisterComponent implements OnInit {

  readonly APP_URL = 'http://localhost:9005/Springmvcangular';
  constructor(private router: Router) {
  }
  
  ngOnInit(){

  }

  onSubmit(event) {
    event.preventDefault();

    const fields = document.getElementsByClassName('.validate-form .input100') as HTMLCollectionOf<HTMLInputElement>;
    let failed = false;

    for (const input in fields) {
      if (!this.validate(input)) {
        failed = true;
      }
    }
    if (failed) {
      return;
    }

    

    const values = {
      email: (document.querySelector('#email') as HTMLInputElement).value,
      password: (document.querySelector('#pass') as HTMLInputElement).value,
      userName: (document.querySelector('#uname') as HTMLInputElement).value,
      firstName: (document.querySelector('#fullname') as HTMLInputElement).value
    };

    const values2 = JSON.stringify(values);
    const userModel = new User(values.firstName, values.password, values.userName, values.email);
  
    const self = this;
    

    console.log(userModel);

    $.ajax({
      url: this.APP_URL + '/insertUser2.app',
      type: 'POST',
      data: values2,
      contentType: 'application/json; charset=utf-8',
      async: false,
      cache: false,
      processData: false,
      success: function (data) {

        const response = JSON.parse(data);
        console.log(response);
        if (response.success){
          self.router.navigate(['/result'], { state: { message: 'Register Success!!' } });
        }else{
          self.router.navigate(['/result'], { state: { message: 'Register Fail!!'  } });
        }
        },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log(errorThrown);
      }
    });
  }

  validate(input) {

    let check = true;
    if ((input as HTMLInputElement).id === 'pass') {
      if ((input as HTMLInputElement).value.length < 8) {
        this.showValidate(input, 'Password must be 8 characters long.');
        check = false;
      }
    } else if ((input as HTMLInputElement).id === 'email') {
      if ((input as HTMLInputElement).value.trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
        this.showValidate(input, 'Valid email is required: ex@abc.xyz');
        check = false;
      }
    } else if ((input as HTMLInputElement).id === 'uname') {
      if ((input as HTMLInputElement).value.length < 8) {
        this.showValidate(input, 'Username must be 8 characters long.');
        check = false;
      }
    } else if ((input as HTMLInputElement).id === 'passRe') {
      if ((input as HTMLInputElement).value != (document.querySelector('#pass') as HTMLInputElement).value) {
        this.showValidate(input, 'Passwords do not match.');
        check = false;
      }
    } else if ((input as HTMLInputElement).id === 'fullname') {
      if ((input as HTMLInputElement).value.length < 4) {
        this.showValidate(input, 'Please enter your full name.');
        check = false;
      }
    }

    return check;
  }

  showValidate(input, message) {
    const thisAlert = (input as HTMLInputElement).parentElement;
    thisAlert.setAttribute('data-validate', message);
    thisAlert.classList.add('alert-validate');
  }

  hideValidate(input) {
    const thisAlert = (input as HTMLInputElement).parentElement;
    thisAlert.classList.remove('alert-validate');
  }

  focus(event) {
    const input = (event as Event).target;
    this.hideValidate(input);
  }

  blur(event) {
    const input = (event as Event).target;
    this.validate(input);
  }
}