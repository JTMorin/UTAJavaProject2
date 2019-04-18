import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css',
              '../styles/global/common.css',
              '../styles/global/login.css']
})
export class ForgotPasswordComponent implements OnInit {

  readonly APP_URL = 'http://localhost:9005/Springmvcangular';


   constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(event) {
    event.preventDefault();
    const self = this;

    const fields = document.getElementsByClassName('.validate-form .input100') as HTMLCollectionOf<HTMLInputElement>;


    const data = {
      email: (document.querySelector('#email') as HTMLInputElement).value
    };

    const values = JSON.stringify(data);

    /* Send the data using post and put the results in a div */
    $.ajax({
      url: this.APP_URL + '/send-email.app',
      type: 'POST',
      data: values,
      contentType: 'application/json; charset=utf-8',
      async: false,
      cache: false,
      processData: false,
      success(data) {
        const response = data;
        console.log(response);

        if (response.success) {
          self.router.navigate(['/result'], { state: { message: 'Email sent.' } });
        } else {
          self.router.navigate(['/result'], { state: { message: 'Email failed to send.' } });
        }

      },
      error(jqXHR, textStatus, errorThrown) {
        console.log(errorThrown);
      }
    });

  }
}