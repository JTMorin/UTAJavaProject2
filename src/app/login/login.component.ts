import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',
    '../styles/global/common.css',
    '../styles/global/login.css']
})
export class LoginComponent implements OnInit {

  readonly APP_URL = 'http://localhost:9005/Springmvcangular';

  constructor() {
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
      password: (document.querySelector('#pass') as HTMLInputElement).value
    };

    const values2 = JSON.stringify(values);
    const self = this;
    /* Send the data using post and put the results in a div */
    $.ajax({
      url: this.APP_URL + '/login2.app',
      type: 'POST',
      data: values2,
      contentType: 'application/json; charset=utf-8',
      async: false,
      cache: false,
      processData: false,
      success(data) {
        console.log(data);
        const response = JSON.parse(data);

        console.log(response);

        if (response.success) {
          const user = response.user;
          sessionStorage.setItem('userId', user.userId);
          sessionStorage.setItem('username', user.userName);
          sessionStorage.setItem('logged-in', '1');
          window.location.href = '/feed';

        } else {
          const message = 'The username or password you entered was incorrect.	Please try again';
          self.showValidate(document.querySelector('#email') as HTMLInputElement, message);
        }

      },
      error(jqXHR, textStatus, errorThrown) {
        console.log(errorThrown);
      }
    });

  }

  ngOnInit() {
  }

  validate(input) {

    let check = true;
    if ((input as HTMLInputElement).id === 'pass') {
      if ((input as HTMLInputElement).value.length < 8) {
        this.showValidate(input, 'Password must be 8 characters long.');
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